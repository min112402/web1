from rest_framework import generics, serializers
from rest_framework.response import Response

from portfolio.models import Portfolio

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


class PortfolioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = "__all__"


class PortfolioView(generics.RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioListSerializer

    def get_object(self):
        queryset = self.get_queryset()
        portfolio_title = self.kwargs['portfolio_title']
        return queryset.get(title=portfolio_title)

