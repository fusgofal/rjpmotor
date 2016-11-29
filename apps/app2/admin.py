from django.contrib import admin
from .models import Alumno, Profesor, Materia, Tutor
# Register your models here.


admin.site.register(Alumno)
admin.site.register(Profesor)
admin.site.register(Tutor)
admin.site.register(Materia)