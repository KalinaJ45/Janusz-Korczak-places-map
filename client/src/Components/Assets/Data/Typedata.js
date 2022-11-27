
// Map icons
import domIconPng from '../Mapicons/dom.png'
import inneIconPng from '../Mapicons/inne.png'
import medycznaIconPng from '../Mapicons/medyczna.png'
import osrodekIconPng from '../Mapicons/osrodek.png'
import przedszkoleIconPng from '../Mapicons/przedszkole.png'
import szk_przedIconPng from '../Mapicons/szk_przed.png'
import szkolaIconPng from '../Mapicons/szkola.png'

// Legend images
import domImagePng from '../Legendimages/dom.png'
import inneImagePng from '../Legendimages/inne.png'
import medycznaImagePng from '../Legendimages/medyczna.png'
import osrodekImagePng from '../Legendimages/osrodek.png'
import przedszkoleImagePng from '../Legendimages/przedszkole.png'
import szk_przedImagePng from '../Legendimages/szk_przed.png'
import szkolaImagePng from '../Legendimages/szkola.png'


const placesTypes = [
  {
    id: 1,
    name_type: 'Dom dziecka',
    icon_type: domIconPng,
    image_type: domImagePng,
  },
  {
    id: 2,
    name_type: 'Placówka przedszkolna / żłobek',
    icon_type: przedszkoleIconPng,
    image_type: przedszkoleImagePng,
  },
  {
    id: 3,
    name_type: 'Placówka szkolno-przedszkolna',
    icon_type: szk_przedIconPng,
    image_type: szk_przedImagePng,
  },
  {
    id: 4,
    name_type: 'Placówka szkolna',
    icon_type: szkolaIconPng,
    image_type: szkolaImagePng,
  },
  {
    id: 5,
    name_type: 'Specjalny ośrodek szkolno-wychowawczy',
    icon_type: osrodekIconPng,
    image_type: osrodekImagePng,
  },
  {
    id: 6,
    name_type: 'Placówka medyczna',
    icon_type: medycznaIconPng,
    image_type: medycznaImagePng,
  },
  {
    id: 7,
    name_type: 'Inne',
    icon_type: inneIconPng,
    image_type: inneImagePng,
  },

]
export default placesTypes;