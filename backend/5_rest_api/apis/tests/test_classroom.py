from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from apis.models import Classroom, School

class ClassroomTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.school = School.objects.create(name='Test School', short_name='TS', address='123 Test Address')
        self.classroom_data = {'grade': '1', 'section': 'A', 'school': self.school.id}
        self.classroom = Classroom.objects.create(grade='1', section='A', school=self.school)
        self.classroom_url = reverse('classroom-detail', args=[self.classroom.id])

    def test_create_classroom(self):
        response = self.client.post(reverse('classroom-list'), self.classroom_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_classrooms(self):
        response = self.client.get(reverse('classroom-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_classroom(self):
        response = self.client.get(self.classroom_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['grade'], self.classroom.grade)

    def test_update_classroom(self):
        updated_data = {'grade': '2', 'section': 'B', 'school': self.school.id}
        response = self.client.put(self.classroom_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['grade'], updated_data['grade'])

    def test_delete_classroom(self):
        response = self.client.delete(self.classroom_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Classroom.objects.filter(id=self.classroom.id).exists())
