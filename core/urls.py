from rest_framework import routers
from .api import SponsorViewset, SponsorGroupViewset, CandidateViewset, CandidateCategoryViewset, DonationsViewset

router = routers.DefaultRouter()
router.register('api/sponsors', SponsorViewset, 'sponsors')
router.register('api/sponsorgroups', SponsorGroupViewset, 'sponsorgroups')
router.register('api/candidates', CandidateViewset, 'candidates')
router.register('api/candidatecategory', CandidateCategoryViewset, 'candidatecategory')
router.register('api/donations', DonationsViewset, 'donations')

urlpatterns = router.urls
