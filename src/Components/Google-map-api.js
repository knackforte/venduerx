import React, { Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './google-map.module.css';

const mapStyles = {
    width: '49%',
    height: '62.4%',
  };

class GoogleMap extends Component{
    render(){
        
        return (

              <div>
                         <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176}}
                        />

                 </div>  
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBT4JkG2NrLiX78tU1VpMJxKnWCt35JtY8'
  })(GoogleMap);