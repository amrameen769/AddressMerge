from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class SponsorGroup(models.Model):
    groupName = models.CharField(max_length=50)

    def __str__(self):
        return self.groupName


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
    owner = models.ForeignKey(User, related_name="ownername", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)
    sponsorgroup = models.ForeignKey(SponsorGroup, related_name="sponsorgroupname", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.firstName


class CandidateCategory(models.Model):
    categoryName = models.CharField(max_length=50)

    def __str__(self):
        return self.categoryName


class Candidates(models.Model):
    candidateFirstName = models.CharField(max_length=100, null=True)
    candidateLastName = models.CharField(max_length=100, null=True)
    candidateCategory = models.ForeignKey(CandidateCategory, related_name="candidatecategoryname",
                                          on_delete=models.CASCADE, null=True)
    email = models.EmailField(max_length=100, unique=True)
    phoneNo = models.BigIntegerField()
    address = models.TextField(blank=True)
    country = models.CharField(max_length=100, blank=True)
    region = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    zip = models.CharField(max_length=10, blank=True)
    sponsorId = models.ForeignKey(Sponsors, related_name="sponsoridname", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)
    owner = models.ForeignKey(User, related_name="candidateownername", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.candidateFirstName


class Donations(models.Model):
    donationName = models.CharField(max_length=50)
    donationDescription = models.TextField(blank=True)
    donationDate = models.DateTimeField()
    donationAmount = models.FloatField(blank=True)
    donationTo = models.ForeignKey(Candidates, related_name="candidate_name", on_delete=models.CASCADE, null=True)
    donationBy = models.ForeignKey(Sponsors, related_name="sponsor_name", on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(User, related_name="donationownername", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.donationName


class Documents(models.Model):
    docName = models.CharField(max_length=100)
    docType = models.CharField(max_length=30)
    docContent = models.TextField(blank=True)
    lastEdited = models.DateTimeField(auto_now_add=True)
    isTemplate = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="documents", on_delete=models.CASCADE, null=True)
