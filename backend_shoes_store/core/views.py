from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from core.utils import Utils
from core import models
from core import serializers
from rest_framework.decorators import action
from rest_framework import views

class ShoesViewSet(viewsets.ModelViewSet):
    queryset = models.Shoes.objects.all()
    serializer_class = serializers.ShoesSerializer

class CsvUploadViewSet(viewsets.ViewSet):
    serializer_class = serializers.ShoesSerializer

    def create(self, request):
        file = request.FILES.get("file")

        fields_to_remove = [
            "id",
            "created_at",
            "modified_at",
            "basemodel_ptr"
        ]

        fields = [
            field.name
            for field in models.Shoes._meta.fields
            if field.name not in fields_to_remove
        ]

        missing_fields = Utils.csv_header_validator(file, fields, ';')

        if missing_fields:
            return Response(
                {"message": f"header fields are missing: {missing_fields}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        file.seek(0)
        data = Utils.csv_to_dict(file)

        print(data)

        serializer_class = self.serializer_class(data=data, many=True)
        serializer_class.is_valid(raise_exception=True)
        serializer_class.save()

        return Response(
            {"message": "file received"}, status=status.HTTP_200_OK
        )
        