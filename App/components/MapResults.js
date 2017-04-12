import React, { PropTypes } from 'react'
import { Text, View, Platform, ListView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import store from '../store/store'
import MapView from 'react-native-maps';
var {height, width} = Dimensions.get('window')


const MapResults = ({ onResultSelection, mapData }) => {
  mapData = {
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
  }

  contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  return(
    <View style={styles.container}>
      <MapView style={styles.map}
        //===========Adding Component here============
        /*Variable    Description
        mapType     change string "standard", "hybird", "satellite", and "terrain"

        */
        mapType="hybrid"
        showsUserLocation={true}
        followUserLocation={false}
        showsCompass={false}
        showsPointOfInterest={false}

        //Required to render map
        region={mapData.region}
        >

          {mapData.markers.map((marker, i) => (
            <MapMarker
              id={i}
              marker={marker}
              onResultSelection={onResultSelection}
              mapData={mapData}
            />
          ))}

        </MapView>
      </View>
    )
  }

  const MapMarker = (props) => {
    const onPress = (result) => {
      Actions.detailsPage();
      // TODO: Replace when actual result object passed in from DDF
      // onResultSelection(result.id);
      props.onResultSelection(result);
    }
    
    return (
      <MapView.Marker
        key={props.id}
        coordinate={props.marker.latlng}
        title={props.marker.title}
        description={props.marker.description}
        >
          <MapView.Callout tooltip style={styles.callout}>
            <View style={[styles.calloutContainer, props.style]}>
              <TouchableHighlight onPress={() => onPress(props.id)} underlayColor='transparent'>
                <View style={styles.bubble}>
                  <View style={styles.amount}>
                    <Text style={styles.calloutHeaderText} numberOfLines={1} ellipsizeMode={'tail'}>{props.marker.title}</Text>
                    <Text style={styles.calloutDescriptionText}>{props.marker.description}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Callout>
        </MapView.Marker>
      )
      return (null);
    }


    MapResults.propTypes = {
      onResultSelection: PropTypes.func.isRequired,
      routes: PropTypes.object,
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
      },
      pushDown: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0
      },
      callout: {
        width: 140,
        height: 100,
      },
      calloutContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
      },
      calloutHeaderText: {
        fontSize: 18,
      },
      calloutDescriptionText: {

      },
      bubble: {
        width: 300,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 6,
        borderColor: 'white',
        borderWidth: 0.5,
        marginTop: 32,
      },
      amount: {
        flex: 1,
      },
      arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: 'white',
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: 'white',
        alignSelf: 'center',
        marginTop: -0.5,
      },
      closeButton: {

      },
      closeButtonText: {
        padding: 5,
        fontSize: 18,
        color: 'blue',
        textAlign: 'right',
        fontWeight: '300',
      },
      modalHeader: {
        flexDirection: 'row',
      },
      modalHeaderSection: {
        flexGrow: 2,
      },
    });

    export default MapResults
