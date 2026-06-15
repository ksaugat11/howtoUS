from rest_framework import serializers
from .models import User, OnboardingProfile

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'confirm_password', 'country']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            password=validated_data['password'],
            country=validated_data.get('country', ''),
        )
        return user

class OnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OnboardingProfile
        fields = [
            'education_level', 'major', 'gpa', 'sat_score',
            'english_test', 'english_score', 'intended_degree', 'start_semester'
        ]