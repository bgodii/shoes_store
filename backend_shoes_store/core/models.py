import uuid

from django.db import models
from hashlib import blake2b
from typing import Dict, List, Optional, Tupler


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)