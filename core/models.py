from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Sponsors(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phoneNo = models.BigIntegerField()
    address = models.TextField(blank=True)
    country = models.CharField(max_length=100, blank=True)
    region = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    zip = models.CharField(max_length=10, blank=True)
    owner = models.ForeignKey(User, related_name="sponsors", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)
