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
    def create(self, request):
        csv_file = request.FILES.get("file")
        extension_supported = ["csv"]

        if not csv_file:
            return Response(
                {"message": "file is missing"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        type_file = csv_file._name
        if type_file.split(".")[1] not in extension_supported:
            return Response(
                {
                    "message": "This file type is not supported, csv type files are expected."  # noqa
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        fields_to_remove = ["id", "created_at", "modified_at", "basemodel_ptr"]

        fields = [
            field.name
            for field in models.Shoes._meta.fields
            if field.name not in fields_to_remove
        ]

        missing_fields = Utils.csv_header_validator(csv_file, fields, ";")

        if missing_fields:
            return Response(
                {"message": f"header fields are missing: {missing_fields}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        csv_file.seek(0)
        data = Utils.csv_to_dict(csv_file)

        lower_fields = ["model", "gender", "color", "brand", "type"]

        for row in data:
            for field in lower_fields:
                row.update({field: row[field].lower()})

        serializer_class = serializers.ShoesSerializer(data=data, many=True)
        serializer_class.is_valid(raise_exception=True)
        serializer_class.save()

        return Response({"message": "file received"}, status=status.HTTP_200_OK)
