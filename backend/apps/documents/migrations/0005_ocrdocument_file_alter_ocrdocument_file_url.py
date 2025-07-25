# Generated by Django 5.2.4 on 2025-07-24 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0004_folder_user_remove_ocrdocument_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ocrdocument',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='ocrdocument',
            name='file_url',
            field=models.URLField(default='http://example.com/test.pdf', max_length=255),
        ),
    ]
