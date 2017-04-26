import React from 'react';
import {StyleSheet, Text } from 'react-native';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';
import LaunchScene from '../scenes/LaunchScene';
import LoginScene from '../scenes/LoginScene';
import WorkspaceSelectionScene from '../scenes/WorkspaceSelectionScene';
import QuerySelectionScene from '../scenes/QuerySelectionScene';
import EditQueryScene from '../scenes/EditQueryScene';
import ListResultsScene from '../scenes/ListResultsScene';
import MapResultsScene from '../scenes/MapResultsScene';
import DetailsPageScene from '../scenes/DetailsPageScene';

const style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: 'white',
            opacity: 1
        },
        padForNavBar: {
          paddingTop: 60
        }
});

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScene} title="Login" hideNavBar />
    <Scene key="workspaceSelection" component={WorkspaceSelectionScene}
      title="Workspaces" sceneStyle={style.padForNavBar} />
    <Scene key="querySelection" component={QuerySelectionScene}
      title="Searches" sceneStyle={style.padForNavBar}
      onRight={ () => {} }
     />
    <Scene key="launch" component={LaunchScene} title="Launch" sceneStyle={style.padForNavBar} />
    <Scene key="editQuery" component={EditQueryScene} title="Edit Search" sceneStyle={style.padForNavBar} />
    <Scene key="detailsPage" component={DetailsPageScene} title="Details" sceneStyle={style.padForNavBar} />
    <Scene key="results" title="Search Results"
        tabs={true} tabBarStyle={style.tabBarStyle}>
        <Scene
          key="listResultsTab"
          title="List"
          icon={TabIcon}
        >
          <Scene key="listResults" component={ListResultsScene} title="Results List" sceneStyle={style.padForNavBar} />
        </Scene>

        <Scene
          key="mapResultsTab"
          title="Map"
          icon={TabIcon}
        >
          <Scene key="mapResults" component={MapResultsScene} title="Results Map" sceneStyle={style.padForNavBar} />
        </Scene>
    </Scene>
  </Scene>
);

export default scenes
