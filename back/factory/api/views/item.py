from rest_framework import generics, serializers,viewsets
from rest_framework.response import Response

from portfolio.models import Item,ItemImages
from factory import settings

#Item - list view
class ItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'thumbnail', 'price', 'production_date')

class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all().order_by('-production_date')
    serializer_class = ItemListSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset, many=True)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        return Response(serializer.data)


# detail images 
class ItemImagesSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField() #디테일 이미지
    def get_image(self, obj):
        return f'{settings.MEDIA_URL}{obj.image}'
    class Meta:
        model = ItemImages
        fields = ('item', 'image')

class ItemImagesView(viewsets.ModelViewSet):
    queryset = ItemImages.objects.all()
    serializer_class = ItemImagesSerializer

# Item - detail view
class ItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField() #대표 이미지
    images = ItemImagesSerializer(many=True, read_only = True) # 설명 
    #images = serializers.RelatedField(source='itemimages', read_only = True) # 설명 
    
    def get_image(self, obj):
        return f'{settings.MEDIA_URL}{obj.image}'

    class Meta:
        model = Item
        fields = ('name', 'image', 'price', 'production_date','link','images')


class ItemView(generics.RetrieveAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    lookup_field = 'name'
    lookup_url_kwarg = 'item_name'
