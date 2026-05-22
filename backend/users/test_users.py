from django.test import TestCase
import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient

@pytest.fixture
def client():
    return APIClient()

@pytest.mark.django_db
def test_register_user(client):
    response = client.post('/api/users/register/', {
        'username': 'testuser',
        'email': 'test@test.com',
        'password': 'senha123'
    })
    assert response.status_code == 201

@pytest.mark.django_db
def test_login_user(client):
    User.objects.create_user(username='testuser', password='senha123')
    response = client.post('/api/token/', {
        'username': 'testuser',
        'password': 'senha123'
    })
    assert response.status_code == 200
    assert 'access' in response.data
    assert 'refresh' in response.data