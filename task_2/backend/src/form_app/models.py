from django.db import models

# Create Person model and table name is user
class Person(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField()
    age=models.IntegerField()
    income=models.FloatField()
    class Meta:
        db_table="user"

