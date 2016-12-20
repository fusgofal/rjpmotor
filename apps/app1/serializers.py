from rest_framework import serializers
from .models import Restaurant, Tip, Category, Payment

class TipSerializer(serializers.ModelSerializer):
	usuario = serializers.CharField(source ='user.username', read_only = True)
	class Meta:
		model = Tip
		fields = '__all__'
		#fields = ('id','usuario','content')

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__' 

class PaymentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Payment
		fields = '__all__' 

class RestaurantSerializer(serializers.ModelSerializer):
	imagen_name = serializers.CharField(source = 'imagen.name')
	tip_set = TipSerializer( read_only= True,  many = True)
	category = CategorySerializer(read_only= True,  many = True)
	payment = PaymentSerializer(read_only= True,  many = True)

	class Meta:
		model = Restaurant
		fields = ('id','name','desciption','imagen_name','tip_set','category','payment')



