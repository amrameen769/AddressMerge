from rest_framework import routers
from .api import SponsorViewset


router = routers.DefaultRouter()
router.register('api/sponsors', SponsorViewset, 'sponsors')

urlpatterns = router.urls
