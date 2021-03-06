# Generated by Django 3.1.2 on 2020-10-10 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('age', models.IntegerField()),
                ('income', models.FloatField()),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.DeleteModel(
            name='Article',
        ),
    ]
