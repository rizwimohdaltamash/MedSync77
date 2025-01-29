import React,{useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer,useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationFinderImage from '../images/location-pointer.png';


const icon=L.icon({
  iconUrl:locationFinderImage,
 
  iconSize:[38,38]  
});



// const position = [51.505, -0.09];
const position =[ 20.5937,78.9629]
function ResetCenterView(props){
    const {selectPosition}=props ; 
    const map=useMap();  

   useEffect(()=>{
    if(selectPosition){
        map.setView(
            L.latLng(selectPosition?.lat,selectPosition?.lon),
            map.getZoom(),
            {
                animate:true
            }
        )
       }
   },[selectPosition]); 

    return  null;  
}

 export default function MainMap(props) {
    const {selectPosition}=props;
    const locationSelection=[selectPosition?.lat,selectPosition?.lon];
  return (
    <MapContainer center={position} zoom={8} style={{width:'100%',height:'100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=9bdRLCwWTU3Cv53QIciK"
      />

     { 
        selectPosition && (
     <Marker position={locationSelection} icon={icon} >
        <Popup >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    )}
    <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}


