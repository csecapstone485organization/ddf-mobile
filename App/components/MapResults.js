import React, { PropTypes, Component } from 'react'
import { Text, View, Platform, ListView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import store from '../store/store'
import MapView from 'react-native-maps';
import { cql_TEST_RESULTS } from '../constants/MockData.js'
var {height, width} = Dimensions.get('window')


export default class MapResults extends Component {
  render() {
    const coordinateList = []
    for(result of cql_TEST_RESULTS.results) {
      if(result.metacard.geometry !== null) {
        coordinateList.push(
          {
            latlng: {
              latitude: result.metacard.geometry.coordinates[1],
              longitude: result.metacard.geometry.coordinates[0]
            },
            title: result.metacard.properties.title,
            description: result.metacard.properties.created
          }
        )
      }
    }

    const MapMarker = (props) => {
      const onPress = (result) => {
        Actions.detailsPage();
        // TODO: Replace when actual result object passed in from DDF
        // onResultSelection(result.id);
        this.props.onResultSelection(result);
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
          marginBottom:40
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

      const mapData = {
        region: {
          latitude: 33.420270,
          longitude: -111.932339,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        //List of markers
        markers:coordinateList
      }

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
                  onResultSelection={this.props.onResultSelection}
                  mapData={mapData}
                />
              ))}

            </MapView>
          </View>
        )
      }
    }
