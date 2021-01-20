from django.contrib import admin
from .models import Item,ItemImages,Portfolio

class ItemImagesInline(admin.TabularInline):
    model = ItemImages

class ItemAdmin(admin.ModelAdmin):
    inlines = [
        ItemImagesInline,
    ]

admin.site.register(Item, ItemAdmin)
admin.site.register(Portfolio)