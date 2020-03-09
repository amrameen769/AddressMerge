from rest_framework import routers
from .api import SponsorViewset, SponsorGroupViewset, CandidateViewset, CandidateCategoryViewset


router = routers.DefaultRouter()
router.register('api/sponsors', SponsorViewset, 'sponsors')
router.register('api/sponsorgroups', SponsorGroupViewset, 'sponsorgroups')
router.register('api/candidates', CandidateViewset, 'candidates')
router.register('api/candidatecategory', CandidateCategoryViewset, 'candidatecategory')

urlpatterns = router.urls
