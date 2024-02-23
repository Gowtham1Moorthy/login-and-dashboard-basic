from django.db import models

class userDetails(models.Model):
    name = models.TextField(max_length = 50)
    dob = models.TextField(max_length = 10)
    email = models.EmailField(unique = True)