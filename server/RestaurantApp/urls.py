from . import views
from rest_framework import routers
from django.urls import path,include
router = routers.DefaultRouter()
router.register('category',views.CategoryView)
router.register('orders',views.OrdersView)
router.register('dishes',views.DishView)

urlpatterns = [
    path('',include(router.urls))
]