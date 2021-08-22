from django.urls import include, path
from .views import *
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', indexView, name='index'),
    path('api/list-create-pet/', petListCreate, name='crt-api'),
    path('endpoints/', listEndPoints, name='points'),
    path('api/just-a-pet/<int:pk>/', onePet, name='onepet'),

     

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)