from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# Client Serializer
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True
            },
        }

    def create(self, validated_data):
        client = User.objects.create_user(validated_data['username'], validated_data['email'],
                                          validated_data['password'])

        return client


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        client = authenticate(**data)
        if client and client.is_active:
            return client
        raise serializers.ValidationError("Incorrect Credentials")
