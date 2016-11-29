from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Materia(models.Model):
	nombre = models.CharField(max_length=50)
	description = models.CharField(max_length=100)
	def __unicode__(self):
		return nombre       

class Profesor(models.Model):
	nombre = models.CharField(max_length=50)
	apellidos = models.CharField(max_length=70)
	materia = models.ManyToManyField(Materia)
	documento = models.IntegerField(max_length=10)
	def __unicode__(self):
		return nombre


class Alumno(models.Model):
	nombre = models.CharField(max_length=50)
	apellidos = models.CharField(max_length=70)
	materia = models.ManyToManyField(Materia)
	documento = models.IntegerField(max_length=10)
	def __unicode__(self):
		return nombre




class Tutor(models.Model):
	alumno = models.ManyToManyField(Alumno)
	nombre = models.CharField(max_length=50)
	documento = models.IntegerField(max_length=10)
	apellidos = models.CharField(max_length=70)
	def __unicode__(self):
		return nombre













