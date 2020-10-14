from django.db import models
from django.conf import settings
from django.utils import timezone

class Goods(models.Model):
    name = models.CharField(max_length = 100)
    thumbnail = models.ImageField(blank =True, upload_to="goods/thumbnail")
    detail = models.TextField()
    price  = models.IntegerField()
    
    def add_Goods(self, name = 'unnamed', thumbnail = None,  detail = '', price = None):
        self.name = name
        self.thumbnail = thumbnail 
        self.detail = detail
        self.price = price
        self.save()

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