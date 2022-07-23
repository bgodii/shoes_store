from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import Shoes


class TestploadView(TestCase):
    def setUp(self) -> None:
        user = User.objects.create_user(username="test", password="test")
        self.client = APIClient()
        self.client.force_login(user)
        self.client
        self.base_url = "/api/upload/"

        self.invalid_txt_file = open("core/tests/mock/invalid_txt_file.txt", "rb")
        self.invalid_csv_header_file = open(
            "core/tests/mock/invalid_csv_header_file.csv", "rb"
        )
        self.valid_csv = open("core/tests/mock/valid_csv.csv", "rb")

    def test_request_without_file(self):
        """
        Should return status_code 400 when csv file is not send
        """
        response = self.client.post(path=self.base_url, formart="application/json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.json(), {"message": "file is missing"})

    def test_request_with_wrong_file_extension(self):
        """
        Should return status_code 400 when csv file extesion is not supported
        """

        response = self.client.post(
            path=self.base_url,
            data={
                "file": self.invalid_txt_file,
            },
            format="multipart",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.json(),
            {
                "message": "This file type is not supported, csv type files are expected."  # noqa
            },
        )

    def test_request_with_invalid_csv_header(self):
        """
        Should return status_code 400 when csv file extesion is not supported
        """

        response = self.client.post(
            path=self.base_url,
            data={
                "file": self.invalid_csv_header_file,
            },
            format="multipart",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.json(),
            {"message": "header fields are missing: ['size']"},
        )

    def test_save_document(self):
        """
        Shoud save document successfully in lowercase
        """

        response = self.client.post(
            path=self.base_url,
            data={
                "file": self.valid_csv,
            },
            format="multipart",
        )

        print(response.json())

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.json(),
            {"message": "file received"},
        )

        shoes = Shoes.objects.get(model="af1")

        self.assertEqual(shoes.size, 41)
        self.assertEqual(shoes.model, "af1")
        self.assertEqual(shoes.gender, "male")
        self.assertEqual(shoes.color, "white")
        self.assertEqual(shoes.brand, "nike")
        self.assertEqual(shoes.type, "sneaker")
        self.assertEqual(shoes.price, 900)
        self.assertEqual(shoes.quantity, 10)
