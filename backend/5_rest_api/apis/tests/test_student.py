from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from apis.models import Student, Classroom, School

class StudentTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.school = School.objects.create(name='Test School', short_name='TS', address='123 Test Address')
        self.classroom = Classroom.objects.create(grade='1', section='A', school=self.school)
        self.student_data = {'first_name': 'John', 'last_name': 'Doe', 'gender': 'Male', 'classroom': self.classroom.id}
        self.student = Student.objects.create(first_name='John', last_name='Doe', gender='Male', classroom=self.classroom)
        self.student_url = reverse('student-detail', args=[self.student.id])

    def test_create_student(self):
        response = self.client.post(reverse('student-list'), self.student_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_students(self):
        response = self.client.get(reverse('student-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_student(self):
        response = self.client.get(self.student_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], self.student.first_name)

    def test_update_student(self):
        updated_data = {'first_name': 'Jane', 'last_name': 'Doe', 'gender': 'Female', 'classroom': self.classroom.id}
        response = self.client.put(self.student_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], updated_data['first_name'])

    def test_delete_student(self):
        response = self.client.delete(self.student_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Student.objects.filter(id=self.student.id).exists())
