# Generated by Django 3.1.2 on 2021-01-18 08:59

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0010_auto_20210118_1442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='thumbnail',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='goods/thumbnail'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='ItemImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='item/detail-image')),
                ('item', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='portfolio.item')),
            ],
        ),
    ]
