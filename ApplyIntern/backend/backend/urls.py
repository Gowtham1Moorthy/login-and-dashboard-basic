from django.contrib import admin
from django.urls import path
import Application.views as vs

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vs.login),
    path('login/', vs.login),
    path('addDetails/', vs.addDetails),
    path('viewDetails/', vs.viewDetails),
]