from rest_framework import generics, serializers
from rest_framework.response import Response

from portfolio.models import Goods

class GoodsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Goods
        fields = ('name', 'thumbnail', 'price', 'production_date')


class GoodsListView(generics.ListAPIView):
    queryset = Goods.objects.all().order_by('-production_date')
    serializer_class = GoodsListSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset, many=True)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        return Response(serializer.data)

class GoodsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Goods
        fields = "__all__"

# detail view
class GoodsView(generics.RetrieveAPIView):
    serializer_class = GoodsSerializer
    queryset = Goods.objects.all()
    def get_object(self):
        #queryset = self.filter_queryset(self.get_queryset())
        queryset = self.get_queryset()
        goods_name = self.kwargs['goods_name']
        return  queryset.get(name=goods_name)
