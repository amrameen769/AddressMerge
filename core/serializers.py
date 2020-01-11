from rest_framework import serializers
from core.models import Sponsors
from django import forms


# Sponsor Serializer
class SponsorSerializer(serializers.ModelSerializer):
    firstName = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "First Name"
            }
        )
    )

    class Meta:
        model = Sponsors
        fields = '__all__'
