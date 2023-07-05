import { Component } from 'react';
import {Map, GoogleApiWrapper, Circle} from 'google-maps-react';



class Gmaps extends Component{
  render(){
    const coords = { lat: 40.330388, lng: -73.981526 };
    const MONMOUTH_COUNTY_BOUNDS = {
      north: 40.29,
      
      west: -74.15,
      
    };
  return (
<div style={{maxHeight:'300px'}}>
        <Map
        className='gmap_map'
        google = {this.props.google}
        style={{ width:'300px', height:'200px', borderRadius:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'}}
        zoom={10}
        initialCenter={{
          lat: 40.330388,
          lng: -73.981526
        }}
        restriction= {{
          latLngBounds: MONMOUTH_COUNTY_BOUNDS,
          strictBounds: true,
        }}
        >
          <Circle
          radius={10000}
          center={coords}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
          />
        </Map>
        </div>
  )
}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyADaZ17gHP5P7vFvjUajEcJpbvxxBdCoYY"
})(Gmaps)