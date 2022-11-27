import os
from django.contrib.gis.utils import LayerMapping
from .models import Place


places_mapping = {
    'name': 'NAZWA',
    'address': 'ADRES',
    'place_type': 'RODZAJ',
    'location': 'POINT',
}
places_shp = os.path.abspath(os.path.join(
    os.path.dirname(__file__), 'data', 'places.shp'))


def run(verbose=True):
    lm = LayerMapping(Place, places_shp,
                      places_mapping, transform=False, encoding='utf-8')
    lm.save(strict=True, verbose=verbose)
