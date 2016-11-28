from rest_framework import viewsets
from .models import Restaurant
from  serializers import RestaurantSerializer
from django.db.models import Count


class RestaurantViewSet(viewsets.ModelViewSet):
    model = Restaurant
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all().annotate(tips=Count('tip')).order_by('tips')