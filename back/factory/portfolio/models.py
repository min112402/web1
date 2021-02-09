from django.db import models
from django.conf import settings
from django.utils import timezone
from imagekit.models import ImageSpecField
from imagekit.processors import Thumbnail
from PIL import Image
import os.path
from io import BytesIO
from django.core.files.base import ContentFile


default_store_link = "https://smartstore.naver.com/kwonthefactory"


def cropped_thumbnail(img, size):
    def flat( *nums ):
        return tuple( int(round(n)) for n in nums )

    class Size(object):
        def __init__(self, pair):
            self.width = float(pair[0])
            self.height = float(pair[1])

        @property
        def aspect_ratio(self):
            return self.width / self.height

        @property
        def size(self):
            return flat(self.width, self.height)

    original = Size(img.size)
    target = Size(size)

    if target.aspect_ratio > original.aspect_ratio:
        # image is too tall: take some off the top and bottom
        scale_factor = target.width / original.width
        crop_size = Size( (original.width, target.height / scale_factor) )
        top_cut_line = (original.height - crop_size.height) / 2
        img = img.crop( flat(0, top_cut_line, crop_size.width, top_cut_line + crop_size.height) )
    elif target.aspect_ratio < original.aspect_ratio:
        # image is too wide: take some off the sides
        scale_factor = target.height / original.height
        crop_size = Size( (target.width/scale_factor, original.height) )
        side_cut_line = (original.width - crop_size.width) / 2
        img = img.crop( flat(side_cut_line, 0,  side_cut_line + crop_size.width, crop_size.height) )
        
    return img.resize(target.size, Image.ANTIALIAS)


def make_thumbnail(self):
        THUMB_SIZE = (400,400)
        image = Image.open(self.thumbnail) 
        image = cropped_thumbnail(image,THUMB_SIZE)
        thumb_name, thumb_extension = os.path.splitext(self.image.name)
        thumb_extension = thumb_extension.lower()
        thumb_filename = thumb_name + '_thumb' + thumb_extension
        if thumb_extension in ['.jpg', '.jpeg']:
            FTYPE = 'JPEG'
            image = image.convert('RGBA')
            background = Image.new('RGBA', image.size, (255,255,255))
            alpha_composite = Image.alpha_composite(background, image)
            image = alpha_composite
            image = image.convert('RGB')
        elif thumb_extension == '.gif':
            FTYPE = 'GIF'
        elif thumb_extension == '.png':
            FTYPE = 'PNG'
        else:
            return False    # Unrecognized file type
        # Save thumbnail to in-memory file as StringIO
        temp_thumb = BytesIO()
        image.save(temp_thumb, FTYPE)
        temp_thumb.seek(0)
        # set save=False, otherwise it will run in an infinite loop
        self.thumbnail.save(thumb_filename, ContentFile(temp_thumb.read()), save=False)
        temp_thumb.close()
        return True

class Item(models.Model):
    name = models.CharField(max_length = 100)
    image = models.ImageField(blank = True, upload_to = "goods/image")
    thumbnail = models.ImageField(blank = False, upload_to = "goods/thumbnail")
    detail = models.TextField()
    price  = models.IntegerField()
    production_date = models.DateTimeField(auto_now_add=True)
    link = models.CharField(max_length=200, default = default_store_link ,blank = True, null = False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kargs):
        if not make_thumbnail(self):
            raise  Exception('Could not create thumbnail - is the file type valid?')
        super(Item, self).save(*args, **kargs)

class ItemImages(models.Model):
    item = models.ForeignKey('Item',related_name = 'images', blank=False, on_delete = models.CASCADE)
    image = models.ImageField(upload_to='item/detail-image')

class Portfolio(models.Model):
    title = models.CharField(max_length = 100)
    thumbnail = models.ImageField(blank =True)
    image = models.ImageField(blank = True, upload_to = "portfolio/image")
    detail = models.TextField()
    production_date = models.DateField()
    link = models.CharField(max_length=200, default = default_store_link ,blank = True, null = False)

    
    def __str__(self):
        return self.title
    def save(self, *args, **kargs):
        if not make_thumbnail(self):
            raise  Exception('Could not create thumbnail - is the file type valid?')
        super(Portfolio, self).save(*args, **kargs)

class PortfolioImages(models.Model):
    portfolio = models.ForeignKey('Portfolio',related_name = 'images', blank=False, on_delete = models.CASCADE)
    image = models.ImageField(upload_to='portfolio/detail-image')

