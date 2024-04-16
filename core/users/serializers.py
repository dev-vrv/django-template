from rest_framework.serializers import ModelSerializer
from .models import CustomUser as User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['__all__']