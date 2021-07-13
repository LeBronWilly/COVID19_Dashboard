# COVID19_Python
很陽春的COVID-19視覺化

##Data Table：
<br>
backend_covid19

##Environment
<br>
Python 3.9.5
<br>
Django 3.2.4
<br>
SQLite 3.35.5

##Install
```Python
pip install matplotlib
pip install requests
pip install numpy
pip install csv
pip install django==3.2.4
pip install django-import-export
pip install django-model-utils
pip install djangorestframework
```

##Run
```Python
python manage.py runserver 8888
```

##If Modify Model, Then Command Below, and Runserver
```Python
python manage.py makemigrations
python manage.py migrate
```

##若上面的Migration Command沒用時
1. 把出錯的migrations資料夾裡面的東西刪掉(0001_initial.py & __init__.py)
2. 然後一樣執行上面的Command

##更新COVID-19的OpenData到資料庫：
http://127.0.0.1:8888/import_data/



