from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    country = models.CharField(max_length=100, blank=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
    )


class OnboardingProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    education_level = models.CharField(max_length=100, blank=True)
    major = models.CharField(max_length=100, blank=True)
    gpa = models.CharField(max_length=10, blank=True)
    sat_score = models.CharField(max_length=10, blank=True)
    english_test = models.CharField(max_length=50, blank=True)
    english_score = models.CharField(max_length=20, blank=True)
    intended_degree = models.CharField(max_length=50, blank=True)
    start_semester = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} profile"