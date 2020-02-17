from rest_framework import routers
from .api import SponsorViewset, SponsorGroupViewset


router = routers.DefaultRouter()
router.register('api/sponsors', SponsorViewset, 'sponsors')
router.register('api/sponsorgroups', SponsorGroupViewset, 'sponsorgroups')

urlpatterns = router.urls
