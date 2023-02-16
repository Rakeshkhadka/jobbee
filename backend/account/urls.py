from django.urls import path
from . import views



urlpatterns = [
    path('register/', views.user_register, name='user_register'),
    path('me/', views.currentUser, name='currentUser'),
    path('me/updateprofile/', views.updateUser, name='updateUser'),
    path('upload/resume/', views.uploadResume, name='uploadResume'),
]