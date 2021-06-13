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

#  1.BooleanField()	 儲存布林值=True/False, 參數 : 無
#  2.CharField()	 儲存單行文字輸入內容, 參數 :
#  max_length=最大字元數 (上限 254)
#  SlugField	 與 CharField() 相同, 但用來儲存 URL 的一部分
#  3.TextField()	 儲存多行文字輸入 textarea 內容, 參數 : 無
#  4.IntegerField()	 儲存整數 (-2147483648 ~ 2147483647), 參數 : 無
#  5.BigInteger()	 儲存長度 64 位元的大整數
#  6.PositiveIntegerField()	 儲存正整數 (0 ~ 2147483647), 參數 : 無
#  7.DecimalField()	 儲存固定精度之十進位數 (Decimal 物件), 必要參數 :
#  8.max_digits=最大位數
#  decimal_places=整數位數
#  9.FloatField()	 儲存浮點數, 參數 : 無
#  10.DateField()	 儲存日期, 格式 datetime.date, 可選參數 : 
#  auto_now=自動儲存今日日期
#  auto_now_add=只在建立時儲存今日日期
#  11.DateTimeField()	 儲存日期時間, 格式 datetime.datetime, 可選參數 : 
#  auto_now=自動儲存今日日期時間
#  auto_now_add=只在建立時儲存今日日期時間
#  12.EmailField()	 儲存有效之電子郵件, 可選參數 :
#  max_length=最大字元數 (上限 254)
#  13.FileField()	 檔案上傳欄位, 參數 : 無
#  14.ImageField()	 圖檔欄位 (繼承自 FileField, 須配合使用 Pillow 套件)
#  15.URLField()	 儲存完整的 URL (繼承自 CharField), 可選參數 :
#  max_length=最大字元數 (預設 200)
#  16.AutoField()	 自動增量主鍵欄位, 參數 primary_key=True
#  17.ForeignKey()	 關聯欄位, 用來指向其他資料表的主鍵 (預設=id) :
#  第一參數=所指之資料表類別名稱
#  第二參數 : on_delete=models.CASCADE


# max_length代表最大長度20字元
# default='M'代表預設值為M
# null=False代表不可空白
# blank=True代表預設空字串
# editable代表是否可顯示，預設為True
# unique代表是否為唯一值，預設為False
#  primary_key	 欄位是否為主鍵, 值=True/False (預設)
#  editable	 欄位是否顯示於 admin 後台, 值=True (預設) /False 
#  choices	 設定 select 欄位之選項 (可用 list 或 tuple)
#  help_text	 顯示於表單元件上的額外資訊
#  verbose_name	 欄位之人類可讀名稱, 未指定以欄位名稱代替 (底線變空白)

