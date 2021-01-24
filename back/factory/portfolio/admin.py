from django.contrib import admin
from .models import Item,ItemImages,Portfolio,PortfolioImages

class ItemImagesInline(admin.TabularInline):
    model = ItemImages

class ItemAdmin(admin.ModelAdmin):
    inlines = [
        ItemImagesInline,
    ]

class PortfolioImagesInline(admin.TabularInline):
    model = PortfolioImages

class PortfolioAdmin(admin.ModelAdmin):
    inlines = [
        PortfolioImagesInline,
    ]


admin.site.register(Item, ItemAdmin)
admin.site.register(Portfolio, PortfolioAdmin)