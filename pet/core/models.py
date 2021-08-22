from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _ #any text that can be translated

# Create your models here.

class Pet(models.Model):
    nome = models.CharField(max_length=200)
    idade = models.SmallIntegerField()
    raca = models.CharField(max_length=300, verbose_name='raça')
    cor   = models.CharField(max_length=200)
    foto  = models.ImageField(upload_to='users', max_length=300)
    descricao = models.TextField()
    data_upload = models.DateTimeField(auto_now_add=True)
    data_last_modify = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)

    class Meta:
        ordering = ['data_upload']

    def __str__(self):
        return self.nome


class Perfil(models.Model):
    #especifica a suas preferencias q ti notificamos qnd 1 upload combinar com ele
    raca = models.CharField(max_length=300, verbose_name='raça')
    idade = models.SmallIntegerField()
    cor   = models.CharField(max_length=200)
    user = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)

    


    
