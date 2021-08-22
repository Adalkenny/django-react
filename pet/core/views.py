from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .serializers import PetSerializer
from .models import Pet
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser

# Create your views here.

def indexView(request):
    return HttpResponse("Hello word. Khor tech is here to dominate!")

@api_view(['GET'])
def listEndPoints(request):
    """
    alll apis end points in the system
    """
    if request.method == 'GET': 
        points = {
            'endpoints': [
                        'endpoints/',
                        'api/list-create-pet/',
                        'api/just-a-pet/<int:pk>/'
                        ]
                }
        return Response(points)

@api_view(['GET','POST']) 
@parser_classes([FormParser, MultiPartParser])
def petListCreate(request, format=None):
    """
    list all or create a new pet
    """
    if request.method == 'GET':
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        print(request.data)
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT','DELETE'])
def onePet(request, pk):
    try:
        pet = Pet.objects.get(pk=pk)
    except Pet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PetSerializer(pet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PetSerializer(pet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)