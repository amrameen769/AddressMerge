from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import ClientSerializer, RegisterSerializer, LoginSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        client = serializer.save()
        return Response({
            "client": ClientSerializer(client, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(client)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        client = serializer.validated_data
        return Response({
            "client": ClientSerializer(client, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(client)[1]
        })


# Get Client API
class ClientAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ClientSerializer

    def get_object(self):
        return self.request.user
