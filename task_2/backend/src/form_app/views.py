from form_app.models import Person
from form_app.Serialization import personSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


#create get and post api for user
#  API views that map closely to  database models Person
class userCreateList(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = personSerializer

@api_view(['POST'])
def add_user_view(request):
    if request.method =="POST":
        #convert data type
        serializer = personSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

        

