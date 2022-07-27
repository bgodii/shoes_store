# Generated by Django 4.0.6 on 2022-07-23 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_shoes_price_shoes_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='gender',
            field=models.CharField(choices=[('male', 'male'), ('female', 'female'), ('unissex', 'unissex')], max_length=50),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='size',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='type',
            field=models.CharField(choices=[('boots', 'boots'), ('casual', 'casual'), ('sneaker', 'sneaker'), ('formal', 'formal'), ('sandals', 'sandals')], max_length=50),
        ),
    ]