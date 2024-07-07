from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apis.views.v1.school import SchoolViewSet
from apis.views.v1.classroom import ClassroomViewSet
from apis.views.v1.teacher import TeacherViewSet
from apis.views.v1.student import StudentViewSet

router = DefaultRouter()
router.register(r'schools', SchoolViewSet)
router.register(r'classrooms', ClassroomViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
