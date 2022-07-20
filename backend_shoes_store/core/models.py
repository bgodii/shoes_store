import uuid

from django.db import models


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)

class Shoes(BaseModel):
    BOOTS = "Boots"
    CASUAL = "Casual"
    SNEAKER = "Sneaker"
    FORMAL = "Formal"
    SANDALS = "Sandals"

    TYPE_CHOICES = (
        (BOOTS, BOOTS),
        (CASUAL, CASUAL),
        (SNEAKER, SNEAKER),
        (FORMAL, FORMAL),
        (SANDALS, SANDALS),
    )

    MALE = "Male"
    FEMALE = "Female"
    UNISSEX = "Unissex"

    GENDER_CHOICES = (
        (MALE, MALE),
        (FEMALE, FEMALE),
        (UNISSEX, UNISSEX)
    )


    size = models.CharField(null=False, max_length=50)
    model = models.CharField(null=False, max_length=50)
    gender = models.CharField(choices=GENDER_CHOICES ,null=False, max_length=50)
    color = models.CharField(null=False, max_length=50)
    brand = models.CharField(null=False, max_length=50)
    type = models.CharField(choices=TYPE_CHOICES ,null=False, max_length=50)