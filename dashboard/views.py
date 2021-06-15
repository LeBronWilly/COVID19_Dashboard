import time
import numpy as np
from matplotlib import pyplot as plt
from typing import Reversible
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib import messages
from django.urls import reverse

from datetime import datetime
import requests
import csv
from .models import covid19
import random
import matplotlib
matplotlib.use('Agg')

# covid19_items = covid19.objects.all().order_by('-cases') [:10]

# Create your views here.


def index(request):
    covid19_items = covid19.objects.all().order_by('-cases')[:10]
    n = len(covid19_items)
    context = {'covid19_items': covid19_items, 'n': n}
    return render(request, 'index.html', locals())


def show_bar(request):
    covid19_items = covid19.objects.all().order_by('-cases')[:10]
    covid19_countries = []
    for covid19_item in covid19_items:
        covid19_countries.append(str(covid19_item.country_ch))
    x = np.arange(len(covid19_countries))

    covid19_cases = []
    for covid19_item in covid19_items:
        covid19_cases.append(int(covid19_item.cases))
    plt.rcParams['font.sans-serif'] = ['Microsoft JhengHei']
    plt.rcParams['axes.unicode_minus'] = False
    plt.figure(figsize=(16, 4))
    plt.bar(x, covid19_cases)
    plt.xticks(x, covid19_countries)
    plt.ylabel('Cases')
    plt.xlabel('Countries')
    plt.title('COVID-19')
    plt.grid(True)
    for a, b in zip(x, covid19_cases):
        plt.text(a, b-b, '%.0f' % b, ha='center',
                 va='bottom', fontsize=12, color="white")
    plt.savefig('static/images/barchart1.png',
                pad_inches=0.0)  # ,bbox_inches='tight'
    plt.close('all')

    covid19_deaths = []
    for covid19_item in covid19_items:
        covid19_deaths.append(int(covid19_item.deaths))
    plt.rcParams['font.sans-serif'] = ['Microsoft JhengHei']
    plt.rcParams['axes.unicode_minus'] = False
    plt.figure(figsize=(16, 4))
    plt.bar(x, covid19_deaths)
    plt.xticks(x, covid19_countries)
    plt.ylabel('Deaths')
    plt.xlabel('Countries')
    plt.title('COVID-19')
    plt.grid(True)
    for a, b in zip(x, covid19_deaths):
        plt.text(a, b-b, '%.0f' % b, ha='center',
                 va='bottom', fontsize=12, color="white")
    plt.savefig('static/images/barchart2.png',
                pad_inches=0.0)  # ,bbox_inches='tight'
    plt.close('all')

    return HttpResponseRedirect(reverse(index))


'''
127.0.0.1:8888/import_data/
'''


def import_data(request):
    CSV_URL = 'https://od.cdc.gov.tw/eic/covid19/covid19_global_cases_and_deaths.csv'
    try:
        with requests.Session() as s:
            download = s.get(CSV_URL)
            decoded_content = download.content.decode('utf-8')
            cr = csv.reader(decoded_content.splitlines(), delimiter=',')
            datas = list(cr)
            for data in datas[1:]:
                try:
                    unit = covid19.objects.get(country_ch=data[0])
                    if unit.cases != int(data[2].replace(',', '')) or unit.deaths != int(data[3].replace(',', '')):
                        unit.cases = int(data[2].replace(',', ''))
                        unit.deaths = int(data[3].replace(',', ''))
                        unit.save()
                except:
                    is_data1 = covid19.objects.filter(country_ch=data[0])
                    is_data2 = covid19.objects.filter(country_en=data[1])
                    is_data3 = covid19.objects.filter(
                        cases=data[2].replace(',', ''))
                    is_data4 = covid19.objects.filter(
                        deaths=data[3].replace(',', ''))
                    if not (is_data1 and is_data2 and is_data3 and is_data4):
                        data = covid19(country_ch=data[0], country_en=data[1], cases=int(
                            data[2].replace(',', '')), deaths=int(data[3].replace(',', '')))
                        data.save()
        messages.error(request, '最新資料更新成功！')
    except:
        messages.error(request, '最新資料更新失敗')
    updated_time = time.strftime("%a %b %d %H:%M:%S %Y", time.localtime())
    # return render(request, "index.html", locals())
    return HttpResponseRedirect(reverse(index))






