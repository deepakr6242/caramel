from django.urls import  path
from . import views

print('I am here')

urlpatterns =[path('',views.index,name='index'),
path(r'click/',views.click,name='click')




]