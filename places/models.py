from random import choices
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
from django.utils.translation import gettext_lazy as _


CHOICES_PLACE_TYPE = [
    ('Dom dziecka', 'Dom dziecka'),
    ('Placówka przedszkolna / żłobek', 'Placówka przedszkolna / żłobek'),
    ('Placówka szkolno-przedszkolna', 'Placówka szkolno-przedszkolna'),
    ('Placówka szkolna', 'Placówka szkolna'),
    ('Specjalny ośrodek szkolno-wychowawczy',
     'Specjalny ośrodek szkolno-wychowawczy'),
    ('Placówka medyczna', 'Placówka medyczna'),
    ('Inne', 'Inne'),
]


class Place(models.Model):
    name = models.CharField(_('Nazwa'), max_length=150)
    address = models.TextField(_('Adres'))
    place_type = models.CharField(_('Rodzaj'), max_length=100,
                                  choices=CHOICES_PLACE_TYPE)
    location = models.PointField(_('Lokalizacja'), srid=4326)

    def __str__(self):
        return self.name

    def get_place_first_name(self):
        return self.name.split()[0]
