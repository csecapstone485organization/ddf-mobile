import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class MapResultsScene extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: 33.420270,
        longitude: -111.932339,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }, 
      //List of markers
      markers:[
        {
          latlng: {latitude: 33.420270, longitude: -111.932339}, title: "ASU Campus",
          //image: require('./image/example.png'), //Use to create a 56px X 56px image
          description: "The place tears and pain and brief momment of satisfaction"
        },
        {
          latlng: {latitude: 33.42372, longitude: -111.925848}, title: "Buffalo Wild Wing",
          description: "WING TUESDAY!!!"   
        },
        {
          latlng: {latitude: 33.423528, longitude: -111.939593}, title: "Brickyard Engineering",
          description: "Too far D:"
        },      
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this)
  }
  onRegionChange(region){
    this.setState({region})
  }
  render(){
    return(
      <View style={styles.container}>
        <MapView style={styles.map} 
          //===========Adding Component here============
          /*Variable    Description   
          mapType     change string "standard", "hybird", "satellite", and "terrain"
            
          */
          mapType="hybrid"
          showsUserLocation={true}
          followUserLocation={true}
          showsCompass={false}
          showsPointOfInterest={false}

          //Required to render map
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          >
          {this.state.markers.map((marker, i) => (
            <MapView.Marker
              key={i}     //There is a warning asking for a qunique key for each child
                      //This line of code satisfy that condition by distiguish each 
                      //MapView.Marker from each other
              coordinate={marker.latlng}
              //image={marker.image} //Use to create image
              title={marker.title}
              description={marker.description}
            />
          ))}
          
        </MapView>
  
        <View style={styles.container}>
          <Text>
          latitude:     {this.state.region.latitude}    {'\n'}
          longitude:    {this.state.region.longitude}   {'\n'}
          latitudeDelta:  {this.state.region.latitudeDelta} {'\n'}
          longitudeDelta: {this.state.region.longitudeDelta}  {'\n'}
          </Text>
        </View>
      </View>       
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height
  }
});
