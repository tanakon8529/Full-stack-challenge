from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from apis.models import School

class SchoolTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.school_data = {'name': 'Test School', 'short_name': 'TS', 'address': '123 Test Address'}
        self.school = School.objects.create(**self.school_data)
        self.school_url = reverse('school-detail', args=[self.school.id])

    def test_create_school(self):
        response = self.client.post(reverse('school-list'), self.school_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_schools(self):
        response = self.client.get(reverse('school-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_school(self):
        response = self.client.get(self.school_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.school_data['name'])

    def test_update_school(self):
        updated_data = {'name': 'Updated Test School', 'short_name': 'UTS', 'address': '123 Updated Address'}
        response = self.client.put(self.school_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], updated_data['name'])

    def test_delete_school(self):
        response = self.client.delete(self.school_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(School.objects.filter(id=self.school.id).exists())
