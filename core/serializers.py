from rest_framework import serializers
from core.models import Sponsors, SponsorGroup
from django import forms


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
