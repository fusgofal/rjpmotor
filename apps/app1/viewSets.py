from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route



from .models import Restaurant, Tip, Category, Payment
from  serializers import RestaurantSerializer, TipSerializer, CategorySerializer, PaymentSerializer
from django.db.models import Count


class RestaurantViewSet(viewsets.ModelViewSet):
	model = Restaurant
	serializer_class = RestaurantSerializer
	queryset = Restaurant.objects.all().annotate(tips=Count('tip')).order_by('id')

	@list_route()
	def tips(self, request, pk=None):
		tips = Tip.objects.filter(restaurant__pk = pk)
		serializer = TipSerializer(tips, many=True)
		return Response(serializer.data)

	# def categories(self, request, pk=None):
	# 	categories = Category.objects.all()
	# 	serializer = CategorySerializer(categories, many=True)
	# 	return Response(serializer.data)


class TipsViewSet(viewsets.ModelViewSet):
	model = Tip
	serializer_class = TipSerializer
	queryset = Tip.objects.all()
	



class CategoryViewSet(viewsets.ModelViewSet):
	model = Category
	serializer_class = CategorySerializer
	queryset = Category.objects.all()
	

class PaymentViewSet(viewsets.ModelViewSet):
	model = Payment
	serializer_class = PaymentSerializer
	queryset = Payment.objects.all()
	