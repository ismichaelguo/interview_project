from django.test import TestCase

from form_app.models import Person
from django.urls import reverse


class PersonModelTests(TestCase):
    def setUp(self):
        self.user1 = Person.objects.create(
            firstName="Jack",
            lastName="Smith",
            email="michaelguo@gmail.com", 
            age=21, 
            income=26615
        )
        self.user2=Person.objects.create(
            firstName="Jack",
            lastName="Smith",
            email="michaelguo@gmail", 
            age=21, 
            income=26615
        )

    def test_user_create(self):
        self.assertEqual(self.user1.firstName,"Jack")
        self.assertEqual(self.user1.lastName,"Smith")
        self.assertEqual(self.user1.email,"michaelguo@gmail.com")
        self.assertEqual(self.user1.age,21)
        self.assertEqual(self.user1.income,26615)
    


class TestApis(TestCase):

    def setUp(self):
        self.list_url = reverse("get_users")
        self.create_url = reverse("add_user")
        self.data = {
            "firstName": "Mike",
            "lastName": "John",
            "email": "isjohn@gmail.com",
            "age": 23,
            "income": 26615
        }
        self.wrong_data = {
            "firstName": "Mike",
            "lastName": "John",
            "email": "not a email",
            "age": "test",
            "income": 26615
        }

    def test_user_list(self):
        response = self.client.get(self.list_url)
        import pdb; pdb.set_trace()
        self.assertEqual(response.status_code, 200)

    def test_user_add(self):
        response = self.client.post(
            self.create_url,
            self.data
        )
        self.assertEqual(response.status_code, 200)
    
    def test_add_wrong_user(self):
        response = self.client.post(
            self.create_url,
            self.wrong_data
        )
        self.assertEqual(response.status_code,400)

