from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Job, CandidatesApplied
from .serializers import JobSerializer, CandidatesAppliedSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from django.db.models import Avg, Min, Max, Count
from .filters import JobsFilter
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone

# Create your views here.
@api_view(['GET'])
def getAllJobs(request):
    result_per_page = 3
    paginator = PageNumberPagination()
    paginator.page_size = result_per_page
    filterset = JobsFilter(request.GET, queryset=Job.objects.all().order_by('id'))
    count = filterset.qs.count()
    queryset = paginator.paginate_queryset(filterset.qs, request)
    serializer = JobSerializer(queryset, many=True)
    return Response({
        "count":count,
        "result_per_page":result_per_page,
        "jobs": serializer.data
    })


@api_view(['GET'])
def getSingleJob(request, pk):
    job = get_object_or_404(Job, pk=pk)
    candidates = job.candidatesapplied_set.all().count()
    serializer = JobSerializer(job, many=False)
    return Response({'job':serializer.data, 'candidates':candidates})

@api_view(['POST'])
@permission_classes(IsAuthenticated)
def  createJob(request):
    request.data['user'] = request.user
    data = request.data

    job = Job.objects.create(**data)
    serializer = JobSerializer(job, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes(IsAuthenticated)
def updateJob(request, pk):

    job = get_object_or_404(Job, id=pk)

    if job.user != request.user:
        return Response({'message':'Unauthorised request'},
        status=status.HTTP_403_FORBIDDEN
        )

    job.title = request.data("title")
    job.description = request.data("description")
    job.email = request.data("email")
    job.address = request.data("address")
    job.jobType = request.data("jobType")
    job.education = request.data("education")
    job.industry = request.data("industry")
    job.experience = request.data("experience")
    job.salary = request.data("salary")
    job.company = request.data("company")
    job.positions = request.data("positions")
    job.save()

    serializer = JobSerializer(job, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes(IsAuthenticated)
def deleteJob(request, pk):
    job = get_object_or_404(Job, id=pk)
    if job.user != request.user:
        return Response({'message':'Unauthorised request'},
        status=status.HTTP_403_FORBIDDEN
        )
    job.delete()
    return Response({'messahe':'Job is deleted.'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopicStats(request, topic):
    args = {'title__icontains':topic}
    jobs = Job.objects.filter(**args)


    if(len(jobs))==0:
        return Response({'message':'No stats found for {topic}'.format(topic=topic)})
    
    stats = jobs.aggregate(
        total_jobs = Count('title'),
        avg_positions = Avg('positions'),
        avg_salary = Avg('salary'),
        min_salary = Min('salary'),
        max_salary = Max('salary')

    )
    return Response(stats)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def applyToJob(request, pk):
    user = request.user
    job = get_object_or_404(Job, id=pk)
    if user.userprofile.resume == '':
        return Response({'error':'Please upload your resume first'}, status=status.HTTP_400_BAD_REQUEST)
    if job.lastDate < timezone.now():
        return Response({'error':'Date Expired'}, status=status.HTTP_400_BAD_REQUEST)
    
    alreadyApplied = job.candidatesapplied_set.filter(user=user).exists()

    if alreadyApplied:
        return Response({'error':'Already applied to the job'}, status=status.HTTP_400_BAD_REQUEST)
    
    jobApplied = CandidatesApplied.objects.create(job=job, user=user, resume=user.userprofile.resume)

    return Response({
        'applied':True,
        'job_id':jobApplied.id
    }, status=status.HTTP_200_OK
    )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCurrentUserAppliedJobs(request):
    args = {'user_id':request.user.id}
    jobs = CandidatesApplied.objects.filter(**args)
    serializer = CandidatesAppliedSerializer(jobs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def isApplied(request, pk):

    user=request.user
    job = get_object_or_404(Job, id=pk)   

    applied = job.candidatesapplied_set.filter(user=user).exists()
    return Response(applied)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCurrentUserJobs(request):
    args = {'user_id':request.user.id}
    jobs = Job.objects.filter(**args)
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCandidatesApplied(request, pk):

    user=request.user
    job = get_object_or_404(Job, id=pk)   

    if job.user !=user:
        return Response({'error':'You can not acces this job'}, status=status.HTTP_403_FORBIDDEN)

    candidates = job.candidatesapplied_set.all()
    serializer = CandidatesAppliedSerializer(candidates, many=True)
    return Response(serializer.data)