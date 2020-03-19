from rest_framework import viewsets, permissions

from .models import Sponsors, SponsorGroup, Candidates, CandidateCategory, Donations
from .serializers import SponsorSerializer, SponsorGroupSerializer, CandidateSerializer, CandidateCategorySerializer, \
    DonationsSerializer


# Sponsor ViewSet
class SponsorViewset(viewsets.ModelViewSet):
    queryset = Sponsors.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = SponsorSerializer

    # def get_queryset(self):
    #     return self.request.user.sponsors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# SponsorGroupViewset
class SponsorGroupViewset(viewsets.ModelViewSet):
    queryset = SponsorGroup.objects.all()

    serializer_class = SponsorGroupSerializer


# CandidateViewset
class CandidateViewset(viewsets.ModelViewSet):
    queryset = Candidates.objects.all()

    serializer_class = CandidateSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# CandidateCategoryViewset
class CandidateCategoryViewset(viewsets.ModelViewSet):
    queryset = CandidateCategory.objects.all()

    serializer_class = CandidateCategorySerializer


# DonationsViewset
class DonationsViewset(viewsets.ModelViewSet):
    queryset = Donations.objects.all()

    serializer_class = DonationsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
