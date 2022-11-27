from rest_framework import serializers
from places.models import Place
from rest_framework_gis.serializers import GeoFeatureModelSerializer


class PlaceSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Place
        geo_field = 'location'
        fields = ['name', 'address', 'place_type']
