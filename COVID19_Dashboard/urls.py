"""COVID19_Dashboard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
# from dashboard.views import hello2, hello3, hello4
from dashboard.views import import_data, index
from dashboard import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('import_data/', import_data, name='import_data'),

    url(r'^listone/$', views.listone),
    url(r'^listall/$', views.listall),
    url(r'^insert/$', views.insert),
    url(r'^modify/$', views.modify),
    url(r'^delete/$', views.delete),


    # url(r'^$', sayhello),
    # url(r'^hello2/(\w+)/$', hello2),
    # url(r'^hello3/(\w+)/$', hello3),
    # url(r'^hello4/(\w+)/$', hello4),
]
