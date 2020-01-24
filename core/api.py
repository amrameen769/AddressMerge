from rest_framework import viewsets, permissions
from .serializers import SponsorSerializer


# Sponsor ViewSet
class SponsorViewset(viewsets.ModelViewSet):
    # queryset = Sponsors.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SponsorSerializer

    def get_queryset(self):
        return self.request.client.sponsors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.client)
