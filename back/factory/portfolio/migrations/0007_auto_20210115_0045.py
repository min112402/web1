# Generated by Django 3.1.2 on 2021-01-14 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_auto_20210113_1256'),
    ]

    operations = [
        migrations.AddField(
            model_name='goods',
            name='thumbnail',
            field=models.ImageField(blank=True, upload_to='goods/thumbnail'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='image',
            field=models.ImageField(upload_to='goods/image'),
        ),
    ]
