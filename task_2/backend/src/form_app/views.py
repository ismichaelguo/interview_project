from form_app.models import Person
from form_app.Serialization import personSerializer
from rest_framework import generics

#create get and post api for user
#  API views that map closely to  database models Person
class userCreateList(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = personSerializer
