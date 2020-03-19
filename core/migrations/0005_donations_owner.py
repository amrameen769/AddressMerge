# Generated by Django 3.0.2 on 2020-03-19 17:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0004_auto_20200319_2222'),
    ]

    operations = [
        migrations.AddField(
            model_name='donations',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='donationownername', to=settings.AUTH_USER_MODEL),
        ),
    ]
