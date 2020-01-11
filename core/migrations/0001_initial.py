# Generated by Django 3.0.2 on 2020-01-11 17:45

from django.db import migrations, models
import django_countries.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sponsors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('phoneNo', models.BigIntegerField()),
                ('address', models.TextField(blank=True)),
                ('city', models.TextField(blank=True, max_length=100)),
                ('state', models.TextField(blank=True, max_length=100)),
                ('country', django_countries.fields.CountryField(blank=True, max_length=2)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
