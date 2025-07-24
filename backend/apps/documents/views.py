from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions
from .models import OCRDocument, Folder, User
from .serializers import DocumentSerializer, FolderSerializer
from django_filters.rest_framework import DjangoFilterBackend
import json
import requests

class folder_list(generics.ListAPIView):
    serializer_class = FolderSerializer
    permission_classes = [permissions.AllowAny]  

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']

    def get_queryset(self):
        return Folder.objects.all()

class document_list(generics.ListCreateAPIView):
    serializer_class = DocumentSerializer
    permission_classes = [permissions.AllowAny]  

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['type', 'status']

    def get_queryset(self):
        return OCRDocument.objects.all()

class document_upload(generics.CreateAPIView):
    serializer_class = DocumentSerializer
    permission_classes = [permissions.AllowAny]  

    def perform_create(self, serializer):
        doc = serializer.save()

class document_result(generics.RetrieveAPIView):
    serializer_class = DocumentSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return OCRDocument.objects.all()
    
class document_download(generics.RetrieveAPIView):
    serializer_class = DocumentSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return OCRDocument.objects.all()
    
    def retrieve(self, request, *args, **kwargs):
        document = self.get_object()
        if document.file:
            response = HttpResponse(document.file, content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{document.name}.pdf"'
            return response
        else:
            return HttpResponse("File not found", status=404)