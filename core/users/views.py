from django.shortcuts import render
from rest_framework import response
from rest_framework.viewsets import ViewSet
from .serializers import UserSerializer

class UserInfo(ViewSet):
    def user_info(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            user = request.user
            serializer = UserSerializer(user)
            return response.Response(serializer.data)     
        else:
            return response.Response({'message': 'anonymous'})