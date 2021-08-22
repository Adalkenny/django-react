from django.contrib import admin
from .models import *


# Register your models here.

class PetAdmin(admin.ModelAdmin):
    class Meta:
        model = Pet
        fields = '__all__'
        list_display = ('nome','raca','data_upload')
        list_filter = ('cor','idade','raca')

admin.site.register(Pet, PetAdmin)

