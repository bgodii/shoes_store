from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from core import models
from core import serializers

class ShoesViewSet(viewsets.ModelViewSet):
    queryset = models.Shoes.objects.all()
    serializer_class = serializers.ShoesSerializer
