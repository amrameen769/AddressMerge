from django.contrib import admin
from .models import Sponsors, SponsorGroup, Documents, Donations, CandidateCategory, Candidates


# Register your models here.


admin.site.register(Sponsors)
admin.site.register(SponsorGroup)
admin.site.register(Donations)
admin.site.register(Candidates)
admin.site.register(CandidateCategory)
admin.site.register(Documents)
