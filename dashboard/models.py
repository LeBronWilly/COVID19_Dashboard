from django.db import models

# Create your models here.
class covid19(models.Model):
    id = models.AutoField(primary_key=True)
    country_ch = models.CharField(max_length=255)
    country_en = models.CharField(max_length=255)
    cases = models.IntegerField(default=0)
    deaths = models.IntegerField(default=0)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.country_ch
    class Meta:
        managed = True
        db_table = "backend_covid19"

# max_length代表最大長度20字元
# default='M'代表預設值為M
# null=False代表不可空白
# blank=True代表預設空字串
# editable代表是否可顯示，預設為True
# unique代表是否為唯一值，預設為False


