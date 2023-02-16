from django.urls import path
from . import views


urlpatterns = [
    path('jobs/', views.getAllJobs, name="getAllJobs"),
    # path('yubraj/', views.FilterJob.as_view(), name= 'Yubraj'),
    path('job/<str:pk>/', views.getSingleJob, name="getSingleJob"),
    path('job/create/', views.createJob, name="createJob"),
    path('job/update/<str:pk>/', views.updateJob, name="updateJob"),
    path('job/delete/<str:pk>/', views.deleteJob, name="deleteJob"),
    path('stats/<str:topic>/', views.getTopicStats, name="getTopicStats"),
    path('jobs/apply/<str:pk>/', views.applyToJob, name="applyToJob"),
    path('me/jobs/applied/', views.getCurrentUserAppliedJobs, name="getCurrentUserAppliedJobs"),
    path('me/jobs/', views.getCurrentUserJobs, name="getCurrentUserJobs"),
    path('jobs/check/<str:pk>/', views.isApplied, name='isApplied'),
    path('job/candidates/<str:pk>/', views.getCandidatesApplied, name='getCandidatesApplied')
]