from rest_framework import serializers
from .models import Restaurant, Tip

class RestaurantSerializer(serializers.ModelSerializer):

	tips = serializers.CharField(max_length=200)


	class Meta:
		model = Restaurant
		#fields = '__all__'
		exclude = ('payment','category')

class TipSerializer(serializers.ModelSerializer):

	class Meta:
		model = Tip
		#fields = '__all__'


