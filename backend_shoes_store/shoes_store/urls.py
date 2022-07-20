from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.authtoken.serializers import AuthTokenSerializer

urlpatterns = [
    # API
    path("rest-auth/", include("rest_framework.urls")),
    path('api/', include('core.urls'), name='core'),
    
]
