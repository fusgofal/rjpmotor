from django.conf.urls import patterns, include, url
from rest_framework import routers
from .views import IndexView, DetalleView
from .viewSets import RestaurantViewSet,TipsViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'restaurants', RestaurantViewSet, "")
router.register(r'tips', TipsViewSet, "Tips")
router.register(r'categorias', CategoryViewSet, "")


urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^$', IndexView.as_view()),
    url(r'^detalle/', DetalleView.as_view()),
)
