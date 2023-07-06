# Generated by Django 2.2.28 on 2023-07-06 06:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_sdfv_xvfbf'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dbvvn',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vbvnf', models.BigIntegerField()),
                ('ryee', models.BigIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='sdfv',
            name='rel_dbvvn_1_n',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sdfv_rel_dbvvn_1_n', to='home.Dbvvn'),
        ),
    ]