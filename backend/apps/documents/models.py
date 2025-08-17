from django.db import models
from django.utils import timezone

class OCRDocument(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    name = models.CharField(max_length=255, default='untitled_document')
    tag = models.CharField(max_length=255, default='general')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    #file_url = models.URLField(max_length=255, default='http://example.com/test.pdf')
    file = models.FileField(upload_to='uploads/', null=True, blank=True)
    uploaded_at = models.DateTimeField(default=timezone.now)
    folder_id = models.ForeignKey('Folder', on_delete=models.CASCADE, related_name='documents', null=True, blank=True)
    
    def getlist(self):
        return self.name.split(',')
    
    def __str__(self):
        return self.name

class Document_result(models.Model):
    document_id = models.ForeignKey(OCRDocument, on_delete=models.CASCADE, related_name='results', null=True, blank=True)
    page  = models.IntegerField()
    box_text = models.TextField()
    result_text = models.TextField()
    edited_text = models.TextField(null=True, blank=True)

    def get_result(self):
        return self.result_text.split(',')

class Folder(models.Model):
    name = models.CharField(max_length=255)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, related_name='folders', null=True, blank=True)

    def __str__(self):
        return self.name
    
    def get_folder(self):
        return self.name.split(',')

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
    
