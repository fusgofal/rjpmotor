from django.conf.urls import patterns, include, url
from rest_framework import routers
from .views import IndexView, DetalleView
from .viewSets import RestaurantViewSet

router = routers.DefaultRouter()
router.register(r'restaurants', RestaurantViewSet, "Restaurants")


urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^$', IndexView.as_view()),
    url(r'^detalle/', DetalleView.as_view()),
)
