from rest_framework import serializers
from form_app.models import Person

#convert model instances to json 
class personSerializer(serializers.ModelSerializer):
    class Meta:
        model=Person
        fields='__all__'
