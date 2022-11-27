from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Place
from .forms import PlaceForm


@admin.register(Place)
class PlaceAdmin(LeafletGeoAdmin):
    form = PlaceForm
    list_display = ['name', 'place_type']
    search_fields = ['name']
    list_filter = ['place_type']
