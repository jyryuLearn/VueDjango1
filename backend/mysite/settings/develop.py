from .base import *


SECRET_KEY = "django-insecure-@w$pb+bpsd=e7s%@u7#v5nng57#y=%xld&^*bu)!t#nx(2!o=h"

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# CSRF_TRUSTED_ORIGINS = ['http://localhost:8080', 'http://127.0.0.1:8080']
