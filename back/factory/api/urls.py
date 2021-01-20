from django.conf.urls import url

from .views.item import ItemListView
from .views.item import ItemView

from .views.portfolio import PortfolioListView
from .views.portfolio import PortfolioView

urlpatterns = [
    url(r'^item/$', ItemListView.as_view(), name='item'),
    url(r'^item/(?P<item_name>(\w|\W)+)/$', ItemView.as_view(), name='item/detail'),
    url(r'^portfolio/$', PortfolioListView.as_view(), name='portfolio'),
    url(r'^portfolio/(?P<portfolio_title>(\w|\W)+)/$', PortfolioView.as_view(), name='portfolio/detail'),
]
