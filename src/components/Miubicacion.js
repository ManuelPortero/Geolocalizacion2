import React from 'react';

const Miubicacion = ({setCenter, setMarker}) => {
 const findme = () => {
    if(!navigator.geolocation){
        alert('El navegador no soporta geolocalización');
        return; 
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude}= position.coords;
            if (setCenter){
                setCenter(latitude, longitude);
            }
            if(setMarker){
                setMarker(latitude, longitude, 'Mi ubicacion', `lat: ${latitude}, lng: ${longitude}`);
            }
        },
        (error)=> {
            alert('Error al obtener la ubicación');

        }

    );
 }; 

return (
    <button type="button"
    className="btn btn-info"
    onClick={findme}>
        Mi Ubicacion
        
    </button>
);


};

export default Miubicacion;