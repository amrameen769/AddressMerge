from rest_framework import serializers
from core.models import Sponsors, SponsorGroup, Candidates, CandidateCategory, Donations


# Sponsor Serializer
class SponsorSerializer(serializers.ModelSerializer):
    sponsorgroupname = serializers.StringRelatedField(source='sponsorgroup', many=False)
    ownername = serializers.StringRelatedField(source='owner', many=False)

    class Meta:
        model = Sponsors
        fields = '__all__'


# SponsorGroupSerializer
class SponsorGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorGroup
        fields = '__all__'


# CandidateSerializer
class CandidateSerializer(serializers.ModelSerializer):
    candidatecategoryname = serializers.StringRelatedField(source='candidateCategory', many=False)
    candidateownername = serializers.StringRelatedField(source='owner', many=False)
    sponsoridname = serializers.StringRelatedField(source='sponsorId', many=False)

    class Meta:
        model = Candidates
        fields = '__all__'


# CandidateCategorySerializer
class CandidateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateCategory
        fields = '__all__'


# DonationsSerializer
class DonationsSerializer(serializers.ModelSerializer):
    candidate_name = serializers.StringRelatedField(source='donationTo', many=False)
    sponsor_name = serializers.StringRelatedField(source='donationBy', many=False)

    class Meta:
        model = Donations
        fields = '__all__'
