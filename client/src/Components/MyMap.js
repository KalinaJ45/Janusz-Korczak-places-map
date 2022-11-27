import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// React leaflet
import { MapContainer, TileLayer, Marker, Popup, WMSTileLayer, LayersControl, LayerGroup } from 'react-leaflet'
import { Icon } from 'leaflet'

// MUI
import { Grid, CircularProgress } from "@mui/material"

// Assets
import placesTypes from './Assets/Data/Typedata'

function MyMap() {

  function IconDisplay(icon_url) {
    const place_icon = new Icon({
      iconUrl: icon_url,
      iconSize: [20, 30],
      iconAnchor: [0, 0],
      popupAnchor: [10, 10]
    });
    return place_icon
  }

  const [places, setPlaces] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    const source = Axios.CancelToken.source();

    async function GetPlaces() {
      try {
        const response = await Axios.get('http://localhost:8000/api/places/',
          { cancelToken: source.token });
        setPlaces(response.data);
        setDataIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }

    GetPlaces();

    return () => {
      source.cancel();
    }
  }, []);

  if (dataIsLoading === true) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress color="success" />
      </Grid>
    )
  }

  return (
    <div style={{ height: "100vh" }}>

      <MapContainer center={[52.11, 19.21]} zoom={6} scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright" collapsed={false}>

          {placesTypes.map((placetype) => {
            return (
              <LayersControl.Overlay checked name={`<img src=${placetype.image_type}></img> ${placetype.name_type}`}>
                <LayerGroup>
                  {places.features.filter(place => place.properties.place_type === placetype.name_type).map((place) => {
                    return (
                      <Marker
                        key={place.id}
                        icon={IconDisplay(placetype.icon_type)}
                        position={[
                          place.geometry.coordinates[1],
                          place.geometry.coordinates[0]
                        ]}
                      >
                        <Popup>
                          <h4>{place.properties.name}</h4>
                          <p>{place.properties.address}</p>
                        </Popup>
                      </Marker>
                    );
                  })}

                </LayerGroup>
              </LayersControl.Overlay>
            );
          })}


          <WMSTileLayer url="http://mapy.geoportal.gov.pl/wss/service/CSWINSP/guest/CSWStartup?SERVICE=CSW&REQUEST=GetRecordById&VERSION=2.0.2&ID=02799338-da67-4e2f-8606-4f24ffb20402&OUTPUTFORMAT=application/xml&OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd&ELEMENTSETNAME=full" format="image/png" transparent='true' tiles='true' layers="51">
          </WMSTileLayer>

        </LayersControl>

      </MapContainer>


    </div >
  );
}

export default MyMap;