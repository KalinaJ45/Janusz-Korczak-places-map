
from django import forms
from .models import Place
from django.contrib.gis.geos import Point


class PlaceForm(forms.ModelForm):
    class Meta:
        model = Place
        fields = ['name', 'address', 'place_type',
                  'location', 'współrzędna_X', 'współrzędna_Y']

    współrzędna_X = forms.FloatField()
    współrzędna_Y = forms.FloatField()

    def clean(self):
        data = super().clean()
        współrzędna_X = data.pop('współrzędna_X')
        współrzędna_Y = data.pop('współrzędna_Y')
        data['location'] = Point(współrzędna_X, współrzędna_Y, srid=4326)
        return data

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        location = self.initial.get('location')
        if isinstance(location, Point):
            self.initial['współrzędna_X'] = location.tuple[0]
            self.initial['współrzędna_Y'] = location.tuple[1]
