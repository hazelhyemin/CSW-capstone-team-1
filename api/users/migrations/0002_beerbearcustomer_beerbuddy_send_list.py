# Generated by Django 2.1.2 on 2018-12-02 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='beerbearcustomer',
            name='beerbuddy_send_list',
            field=models.ManyToManyField(blank=True, related_name='_beerbearcustomer_beerbuddy_send_list_+', to='users.BeerBearCustomer'),
        ),
    ]