from django.db import models
from django.conf import settings
from django.utils import timezone

class Goods(models.Model):
    name = models.CharField(max_length = 100)
    thumbnail = models.ImageField(blank =True)
    detail = models.TextField()
    price  = models.IntegerField()
    
    def add_Goods(self, name = 'nonamed', image = None,  detail = '', price = None):
        self.name = name
        self.thumbnail = image 
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

    

