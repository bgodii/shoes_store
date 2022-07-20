from dataclasses import field
from rest_framework import serializers
from core.models import Shoes

class ShoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoes
        fields = "__all__" 