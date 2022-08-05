from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)

urlpatterns = [
    # API
    path("rest-auth/", include("rest_framework.urls")),
    path('api/', include('core.urls'), name='core'),
    path(
        'api/token/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair',
    ),
    path(
        'api/token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh',
    ),
]
