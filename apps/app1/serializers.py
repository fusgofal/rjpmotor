from rest_framework import serializers
from .models import Restaurant, Tip

class TipSerializer(serializers.ModelSerializer):

	usuario = serializers.CharField(source ='user.username')

	class Meta:
		model = Tip
		fields = ('id','usuario','content')



class RestaurantSerializer(serializers.ModelSerializer):

	tip_set = TipSerializer( read_only= True,  many = True)
	imagen_name = serializers.CharField(source = 'imagen.name')


	class Meta:
		model = Restaurant
		fields = '__all__'



