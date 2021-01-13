from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
 # client ---project.url  ----ap.url----- views---- db


def index(request):
	return render(request,'demo/base.html')
@csrf_exempt
def click(request):
   return HttpResponse('click from server side')