# Generated by Django 2.1.2 on 2018-12-02 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('coupons', '0001_initial'),
        ('chats', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='coupons',
            field=models.ManyToManyField(null=True, to='coupons.Coupon'),
        ),
    ]
