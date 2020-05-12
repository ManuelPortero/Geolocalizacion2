import React, { useState } from 'react';
import Mapquest from './components/Mapquest';
import Miubicacion from './components/Miubicacion'
import Busqueda from './components/Busqueda'
function App() {
  // component state
  const [lat, setLat] = useState('55.8651505');
  const [lng, setLng] = useState('-4.2576299');

  const [markers, setMarkers]= useState([]);

  // fijar el centro del mapa 
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12);
  }; 

  const addMarker = (lat, lng, title, subtitle) => {
    const marker =  window.L.mapquest.textMarker(
      new window.L.LatLng(lat,lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'right', 
        type: 'marker',
        icon: {
          primaryColor: '#a8190f',
          secondaryColor: '#db2c2c',
          size: 'md' 
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));

    const copyMarkers = markers.slice(0);

    copyMarkers.splice(0,0,marker);
    setMarkers(copyMarkers);
  };

  const clearMarkers = () => {
    markers.forEach(marker => {
      window.L.mapquest.Map.getMap('map').removeLayer(marker); 
    });
    //limpiar state
    setMarkers([]);

  };


  return (
    <div className="container-fluid">
      <div className="row pl-3 pr-3 pt-3 pb-3">
        <div className="col-sm-10">
          <Busqueda setCenter={setCenter} addMarker={addMarker} clearMarkers={clearMarkers} />
        </div>
        <div className="col-sm-2">
        <Miubicacion setCenter={setCenter} setMarker={addMarker} />
        </div>
      </div>
      <Mapquest
        height="80vh"
        width="100%"
        center={[lat, lng]}
        tileLayer={'map'} //map, dark
        zoom={12}
        apiKey="HrtiMAi22BYKTxb8pjWRhXKrGSea66Pi"
      />
    </div>
  );
}

export default App;
