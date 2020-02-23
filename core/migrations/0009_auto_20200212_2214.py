# Generated by Django 3.0.2 on 2020-02-12 16:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_candidatecategory_candidates_documents_donations'),
    ]

    operations = [
        migrations.CreateModel(
            name='SponsorGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('groupName', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='sponsors',
            name='sponsorgroup',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.SponsorGroup'),
        ),
    ]