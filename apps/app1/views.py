from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Category, City, Payment, Restaurant


# Create your views here.
class IndexView(TemplateView):
	template_name = 'index.html'

	def get_context_data(self, **Kwargs):
		context = super(IndexView, self).get_context_data(**Kwargs)
		context['categories'] = Category.objects.all()
		context['payments'] = Payment.objects.all()
		context['cities'] = City.objects.all()
		restaurants = Restaurant.objects.all()  #[:5]  	los ultimos 5 restaurantes
		tips = [restaurant.tip_set.all().count() for restaurant in restaurants]
		context['restaurants'] = zip(restaurants, tips)
		context["MEDIA_URL"] = 'localhost:8000/media/'
		return context
