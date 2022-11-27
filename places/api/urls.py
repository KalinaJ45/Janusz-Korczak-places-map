from rest_framework.routers import DefaultRouter
from places.api.views import PlaceViewSet

from places.api import views as places_apviews

router = DefaultRouter()

router.register(prefix='api/v1/places', viewset=PlaceViewSet, basename='place')

urlpatterns = router.urls
