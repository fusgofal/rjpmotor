from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
	name = models.CharField(max_length=50)
	def __unicode__(self):
		return self.name

		
class City(models.Model):
	name = models.CharField(max_length=50)
	def __unicode__(self):
		return self.name

class Payment(models.Model):
	pay = models.CharField(max_length=50)
	def __unicode__(self):
		return self.pay

class Restaurant(models.Model):
	payment = models.ManyToManyField(Payment)
	category = models.ManyToManyField(Category)
	name = models.CharField(max_length=50)
	desciption = models.CharField(max_length=200)
	imagen = models.ImageField(upload_to = 'foto')

	def __unicode__(self):
		return self.name

class Establishment(models.Model):
	restaurant = models.ForeignKey(Restaurant)
	city = models.ForeignKey(City)
	address = models.CharField(max_length=50)

	def __unicode__(self):
		return self.address

class Tip(models.Model):
	restaurant = models.ForeignKey(Restaurant)
	user = models.ForeignKey(User)
	content = models.CharField(max_length=200)

	def __unicode__(self):
		return self.content
