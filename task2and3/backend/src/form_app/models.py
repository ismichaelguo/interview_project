from django.db import models

# Create Person model and table name is user
class Person(models.Model):
    firstName=models.CharField(max_length=50)
    lastName=models.CharField(max_length=50)
    email=models.EmailField()
    age=models.IntegerField()
    income=models.FloatField()
    class Meta:
        db_table="user"

    # def __str__(self):
    #     return self.firstName

