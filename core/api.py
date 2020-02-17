from rest_framework import viewsets, permissions

from .models import Sponsors, SponsorGroup
from .serializers import SponsorSerializer, SponsorGroupSerializer


# Sponsor ViewSet
class SponsorViewset(viewsets.ModelViewSet):
    queryset = Sponsors.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SponsorSerializer

    # def get_queryset(self):
    #     return self.request.user.sponsors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SponsorGroupViewset(viewsets.ModelViewSet):
    queryset = SponsorGroup.objects.all()

    serializer_class = SponsorGroupSerializer
