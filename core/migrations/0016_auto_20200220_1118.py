# Generated by Django 3.0.2 on 2020-02-20 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_auto_20200218_1903'),
    ]

    operations = [
        migrations.RenameField(
            model_name='candidates',
            old_name='candidateName',
            new_name='candidateLastName',
        ),
        migrations.AddField(
            model_name='candidates',
            name='candidateFirstName',
            field=models.CharField(default=True, max_length=100),
        ),
    ]