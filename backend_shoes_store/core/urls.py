from django.urls import include, path
from rest_framework.routers import DefaultRouter

from core import views

app_name = 'core'

routers = DefaultRouter()
routers.register("shoes", views.ShoesViewSet, basename="shoes")

urlpatterns = [path('', include(routers.urls))]
