from django.contrib import admin
from .models import covid19
# Register your models here.

# 加入 ModelAdmin 類別，定義顯示欄位、欄位過濾資料、搜尋和排序
#使用list_display顯示多個欄位
#使用list_filter資料過濾
#使用search_fields依照欄位搜尋
#使用ordering排序

class covid19Admin(admin.ModelAdmin):   
    list_display = ("country_ch","country_en",'cases', 'deaths')
    # list_filter = ['country_ch']
    fields = ["cases",'deaths']
    search_fields=['country_ch']
    # ordering=['cases']
    ordering=['-cases']   # 遞減排序

admin.site.register(covid19,covid19Admin)