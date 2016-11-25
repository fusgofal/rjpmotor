from rest_framework import serializers
from .models import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):

	tips = serializers.CharField(max_length=200)


	class Meta:
		model = Restaurant
		#fields = '__all__'
		exclude = ('payment','category')

