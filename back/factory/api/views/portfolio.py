from rest_framework import generics, serializers, viewsets
from rest_framework.response import Response

from portfolio.models import Portfolio, PortfolioImages 
from factory import settings

class PortfolioListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = ('title', 'thumbnail', 'production_date')


class PortfolioListView(generics.ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioListSerializer

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
class PortfolioImagesSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField() #디테일 이미지
    def get_image(self, obj):
        return f'{settings.MEDIA_URL}{obj.image}'
    class Meta:
        model = PortfolioImages
        fields = ('portfolio', 'image')

class ItemImagesView(viewsets.ModelViewSet):
    queryset = PortfolioImages.objects.all()
    serializer_class = PortfolioImagesSerializer


# Portfolio - detail view
class PortfolioSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField() #대표 이미지
    images = PortfolioImagesSerializer(many=True, read_only = True) # 설명 
    
    def get_image(self, obj):
        return f'{settings.MEDIA_URL}{obj.image}'
    
    class Meta:
        model = Portfolio
        fields = ('title', 'image', 'detail', 'production_date', 'link', 'images')


class PortfolioView(generics.RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    lookup_field = 'title'
    lookup_url_kwarg = 'portfolio_title'