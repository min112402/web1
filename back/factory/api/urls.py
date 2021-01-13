from django.conf.urls import url

from .views.goods import GoodsListView
from .views.goods import GoodsView

from .views.portfolio import PortfolioListView
from .views.portfolio import PortfolioView

urlpatterns = [
    url(r'^goods/$', GoodsListView.as_view(), name='goods'),
    url(r'^goods/(?P<goods_name>(\w|\W)+)/$', GoodsView.as_view(), name='goods/detail'),
    url(r'^portfolio/$', PortfolioListView.as_view(), name='portfolio'),
    url(r'^portfolio/(?P<portfolio_title>(\w|\W)+)/$', PortfolioView.as_view(), name='portfolio/detail'),
]
