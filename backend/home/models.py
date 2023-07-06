from django.conf import settings
from django.db import models
class Xvfbf(models.Model):
    'Generated Model'
    vnnfj = models.BigIntegerField()
class Sdfv(models.Model):
    'Generated Model'
    bvfdn = models.BigIntegerField()
    tryry = models.BigIntegerField()
    ourye = models.BigIntegerField()
    rel_xvfbf_1_1 = models.OneToOneField("home.Xvfbf",blank=True,null=True,on_delete=models.CASCADE,related_name="sdfv_rel_xvfbf_1_1",)
    rel_dbvvn_1_n = models.ForeignKey("home.Dbvvn",blank=True,null=True,on_delete=models.CASCADE,related_name="sdfv_rel_dbvvn_1_n",)
class Dbvvn(models.Model):
    'Generated Model'
    vbvnf = models.BigIntegerField()
    ryee = models.BigIntegerField()
