from core.models import Sponsors
from rest_framework import viewsets, permissions
from .serializers import SponsorSerializer


# Sponsor ViewSet
class SponsorViewset(viewsets.ModelViewSet):
    queryset = Sponsors.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SponsorSerializer
