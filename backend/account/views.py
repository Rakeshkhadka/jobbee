from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignUpSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


from .valiidators import validate_file_extension

# Create your views here.
@api_view(['POST'])
def user_register(request):
    data = request.data
    user = SignUpSerializer(data=data)

    if user.is_valid():
        if not User.objects.filter(username=data['email']).exists():
            user = User.objects.create(
                first_name = data['first_name'],
                last_name = data['last_name'],
                username = data['email'],
                email = data['email'],
                password = make_password(data['password'])
            )

            return Response(
                {'message': 'User registered successfully with email {email}'.format(email=data['email'])},
                # {'message': 'User registered successfull with email'},
                status = status.HTTP_200_OK,
            )
        
        else:
            return Response({
                'message': 'User already exists with email {email}'.format(email=data['email'])},
                # 'message': 'User already exists with email '},
                status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response('user.errors')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def currentUser(request):
    user = UserSerializer(request.user)
    return Response(user.data)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request):
    user = request.user
    data = request.data
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.username = data['email']
    user.email = data['email']
    

    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def uploadResume(request):
    user = request.user
    resume = request.FILES['resume']

    if resume == '':
        return Response({'error':'Please upload your resume'})

    isValidFile = validate_file_extension(resume.name)

    if not isValidFile:
        return Response({'error':'Please enter text or pdf file'})

    serializer =  UserSerializer(user, many=False)
    user.userprofile.resume = resume
    user.userprofile.save()
    return Response(serializer.data)