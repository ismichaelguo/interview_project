from django.test import TestCase

from form_app.models import Person

from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse


class PersonModelTests(TestCase):

    def test_was_published_recently_with_user(self):

        user1 = Person(firstName="Jack", lastName="Smith",
                       email="michaelguo@gmail", age=21, income=26615)
        self.assertEquals(user1.firstName, "Jack")
        self.assertEquals(user1.lastName, "Smith")
        self.assertEquals(user1.email, "michaelguo@gmail")
        self.assertEquals(user1.age, 21)
        self.assertEquals(user1.income, 26615)


class TestApis(TestCase):

    def setUp(self):
        self.list_url = reverse("get_users")
        self.create_url = reverse("add_user")
        self.data = {
            "firstName": "Mike",
            "lastName": "John",
            "email": "isjohn@gmail",
            "age": 23,
            "income": 26615
        }

    def test_user_list(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, 200)

    def test_user_add(self):
        response = self.client.post(
            self.create_url,
            self.data
        )
        self.assertEqual(response.status_code, 201)

        # Person(firstName="Jack", lastName="Smith", email="michaelguo@gmail",age=21,income=26615)
