from rest_framework import serializers
from core.models import Sponsors, SponsorGroup, Candidates, CandidateCategory


# Sponsor Serializer
class SponsorSerializer(serializers.ModelSerializer):
    sponsorgroupname = serializers.StringRelatedField(source='sponsorgroup', many=False)
    ownername = serializers.StringRelatedField(source='owner', many=False)

    class Meta:
        model = Sponsors
        fields = '__all__'


class SponsorGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorGroup
        fields = '__all__'


class CandidateSerializer(serializers.ModelSerializer):
    candidatecategoryname = serializers.StringRelatedField(source='candidateCategory', many=False)
    candidateownername = serializers.StringRelatedField(source='owner', many=False)
    sponsoridname = serializers.StringRelatedField(source='sponsorId', many=False)

    class Meta:
        model = Candidates
        fields = '__all__'


class CandidateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateCategory
        fields = '__all__'

