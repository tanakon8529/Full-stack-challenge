from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from apis.models import Teacher, Classroom, School

class TeacherTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.school = School.objects.create(name='Test School', short_name='TS', address='123 Test Address')
        self.classroom = Classroom.objects.create(grade='1', section='A', school=self.school)
        self.teacher_data = {'first_name': 'John', 'last_name': 'Doe', 'gender': 'Male', 'classrooms': [self.classroom.id]}
        self.teacher = Teacher.objects.create(first_name='John', last_name='Doe', gender='Male')
        self.teacher.classrooms.set([self.classroom])
        self.teacher_url = reverse('teacher-detail', args=[self.teacher.id])

    def test_create_teacher(self):
        response = self.client.post(reverse('teacher-list'), self.teacher_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_teachers(self):
        response = self.client.get(reverse('teacher-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_teacher(self):
        response = self.client.get(self.teacher_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], self.teacher.first_name)

    def test_update_teacher(self):
        updated_data = {'first_name': 'Jane', 'last_name': 'Doe', 'gender': 'Female', 'classrooms': [self.classroom.id]}
        response = self.client.put(self.teacher_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], updated_data['first_name'])

    def test_delete_teacher(self):
        response = self.client.delete(self.teacher_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Teacher.objects.filter(id=self.teacher.id).exists())
