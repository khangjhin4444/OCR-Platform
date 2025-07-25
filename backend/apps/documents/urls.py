from django.urls import path
from .views import folder_list,document_list, document_upload, document_result, document_download
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('workspace/', folder_list.as_view(), name='folder_list'),
    path('workspace/folder/<int:folder_id>/', document_list.as_view(), name='document_list'),
    path('workspace/folder/<str:folder_name>/document/<int:doc_id>/', document_result.as_view(), name='document_detail'),
    path('workspace/folder/<str:folder_name>/document/<int:doc_id>/download/', document_download.as_view(), name='document_download'),  
    # path('workspace/folder/<str:folder_name>/document/<UUID:doc_id>/', document_delete.as_view(), name='document_delete'),
    # path('workspace/folder/<str:folder_name>/document/<UUID:doc_id>/', document_edit.as_view(), name='document_edit'),
    path('workspace/upload/', document_upload.as_view(), name='document_upload'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)