from rest_framework import serializers
from .models import OCRDocument, Document_result, Folder, User

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = OCRDocument
        fields = '__all__'

class DocumentResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document_result
        fields = '__all__'

class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  # Exclude password for security
