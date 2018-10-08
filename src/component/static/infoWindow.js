import React from 'react';    
import PropTypes from 'prop-types';
import './infoWindow.scss'

var WindowInfo=(props)=> {   
  return(
         <div className="win">    
         <h6>    
           Current Location achieved by static component 
         </h6>    
         <p className="has-border"><span>You entered: </span>{props.entered.locationName+', '+props.entered.city+', '+props.entered.countryName}</p>  
         <p><span>Latitude: </span> {props.coordinate.lat}</p>  
         <p><span>Longitude: </span> {props.coordinate.lng}</p> 
         <a>Drag pin to change location</a>  
         </div>
         )  
}; 

export default WindowInfo