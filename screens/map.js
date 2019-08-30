import React, { Component } from 'react';
import MapView, {Marker,Geojson} from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import Axios from 'axios';




export default class Map extends Component{
  

  getCordinate(e){
    e.persist();
    e.nativeEvent;
  }
  
  render(){
    if(this.props.Mode == 'getdata'){
      return(
        <View style={{flex:1}}>
          <MapView
          initialRegion={{
            latitude: -6.301486201275736,
            longitude: 106.73522774610166,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} style={{flex:1}} >

          <Marker 
          coordinate={{
            latitude: -6.301486201275736,
            longitude: 106.73522774610166
          }}
          title="Mampikos Maps"
          description="Mencari lokasi kos terdekat dari sini"
          showsUserLocation={true}
          showsCompass={true}
          showsTraffic={true}
          draggable
          onDragEnd={ (e) => {

            
              Axios.get(`https://us1.locationiq.com/v1/reverse.php?key=8065a39cebb499&lat=${e.nativeEvent.coordinate.latitude.toString()}&lon=${e.nativeEvent.coordinate.longitude.toString()}&format=json`)
              .then(r => {
                

                if(r.data.address.city !== undefined){
                  this.props.getlocation(r.data.display_name,r.data.address.city)

                }else{
                  this.props.getlocation(r.data.display_name,r.data.address.state)
                }
                
              }).catch(err => alert(err))
              this.props.sendData(e.nativeEvent.coordinate.latitude.toString(),e.nativeEvent.coordinate.longitude.toString())
          
            
            
          }}>


            <Image source={require('../src/icon/pin3.png')} style={{height: 55,width: 50,resizeMode:'stretch'}} />

          </Marker>


          </MapView>
    
        </View>
      )
    }else if(this.props.Mode == 'normal'){
      return(

      

        <View style={{flex:1}}>
            <MapView
            initialRegion={{
              latitude: -6.301486201275736,
              longitude: 106.73522774610166,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} style={{flex:1}} >


            </MapView>
      
          </View>
      )

    }else{
      return(

      
        <View style={{flex:1}}>
          <Text>Hello world</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});