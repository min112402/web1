from django.db import models
from django.conf import settings
from django.utils import timezone
from imagekit.models import ImageSpecField
from imagekit.processors import Thumbnail

store_link = "https://smartstore.naver.com/kwonthefactory"

class Goods(models.Model):
    name = models.CharField(max_length = 100)
    image = models.ImageField(blank = True, upload_to = "goods/image")
    thumbnail = ImageSpecField(source ='image',processors = [Thumbnail(400,400)], format = 'JPEG', options = {'quality':60})
    detail = models.TextField()
    price  = models.IntegerField()
    production_date = models.DateTimeField(auto_now_add=True)
    link = models.CharField(max_length=200, default = store_link ,blank = True, null = False)
    def __str__(self):
        return self.name

class Portfolio(models.Model):
    title = models.CharField(max_length = 100)
    thumbnail = models.ImageField(blank =True)
    detail = models.TextField()
    production_date = models.DateField()

    def add_Goods(self, title = 'untitled', thumbnail = None,  detail = '', production_date = None):
        self.title = title
        self.thumbnail = thumbnail
        self.detail = detail
        self.production_date = production_date
        self.save()

    def __str__(self):
        return self.title
