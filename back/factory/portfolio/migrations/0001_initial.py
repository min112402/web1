# Generated by Django 3.1.2 on 2020-10-02 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('thumbnail', models.ImageField(blank=True, upload_to='')),
                ('detail', models.TextField()),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Portfoio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('thumbnail', models.ImageField(blank=True, upload_to='')),
                ('detail', models.TextField()),
                ('production_date', models.DateField()),
            ],
        ),
    ]
