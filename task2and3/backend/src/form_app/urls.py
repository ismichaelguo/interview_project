from django.urls import path, include
from . import views

urlpatterns = [
    path('get_users/', views.userCreateList.as_view(),name="get_users"),
    path('add_user',views.add_user_view,name="add_user")
]
