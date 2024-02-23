from django.http import JsonResponse
import Application.models as md

def login(request):
    if request.GET.get("username") and request.GET.get("password") :
        return JsonResponse({"status": True})
    return JsonResponse({"status": False})

def addDetails(request):
    name = request.GET.get("name")
    age = request.GET.get("age")
    email = request.GET.get("email")

    if name and len(age) == 10 and email:
       obj = md.userDetails()

       obj.name = name
       obj.age = age
       obj.email = email
       obj.save
       return JsonResponse({"status": True})
    return JsonResponse({"status": False})

def viewDetails(request):
    obj = md.userDetails.objects.all()

    return JsonResponse({"status": obj})