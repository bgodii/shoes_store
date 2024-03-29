# Generated by Django 4.0.6 on 2022-07-20 23:12

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('modified_at', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Shoes',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.basemodel')),
                ('size', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Unissex', 'Unissex')], max_length=50)),
                ('color', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=50)),
                ('type', models.CharField(choices=[('Boots', 'Boots'), ('Casual', 'Casual'), ('Sneaker', 'Sneaker'), ('Formal', 'Formal'), ('Sandals', 'Sandals')], max_length=50)),
            ],
            bases=('core.basemodel',),
        ),
    ]
