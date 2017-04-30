## Setup
Step through React Native installation before starting.
https://facebook.github.io/react-native/docs/getting-started.html
```
git clone https://github.com/csecapstone485organization/ddf-mobile.git
cd ddf-mobile
npm install    # install dependencies
react-native link    # link libraries: https://facebook.github.io/react-native/docs/linking-libraries-ios.html
```
Either ```react-native run-ios``` or ```react-native run-android``` to launch packager and run app.

To load map on Android, you'll need to add API key, below.

## Adding an API key to Android

Create the file android/app/src/main/res/values/api_key.xml with the following text:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <item name="google_maps_api_key" type="string">YOUR API KEY HERE</item>
</resources>
```

## File Structure
File structure

* store - Configure any middleware for your Redux store, which will contain application state.
* Core
    * App.js - initialize application with store and routing
    * scenes.js - Directory of scenes used by router
* actions - List of actions that can be triggered from application. Returns object containing the payload (data input form action) and the type of action. Async calls will be found in here.
* reducers - Takes in actions, updates store state. Pure functions - knowing the input, you'll always know what the new store state will be
* scenes - high level components that link to the router. Contain one or more containers.
* containers - data layer of component; assembles all specified actions, state information, and misc. paramaeters and makes them available to components as props
* components - Pure UI elements. Blindly take in props from parent container and render them in desired manner.

## Key Concepts
* component pattern
    * scenes handle routing
    * containers handle data and state
    * component handles rendering
* data flow
    * store contains state
    * actions are composed of user input and action type
    * reducer mediates between the two. It reads in state and an action and spits out a new state based on that action's effects on the state. It is a pure function

## Unsigned certs

In order to allow RN to access DDF endpoints with self-signed certs, you'll need to make some edits to the React Native XCode project as stated here: http://stackoverflow.com/questions/36289125/react-native-fetch-from-https-server-with-self-signed-certificate

This will get it working on iOS but will still present problems with Android.

## Known issues and notes

* Static assets - Static assets must be loaded into XCode and Android Studio to be rendered dynamically on mobile. The URI is currently hardcoded to the resources/images folder.
* Google Maps error - There appears to be an error coming from react-native-maps's fitToCoordinates API, where adding padding to how far the map zooms out to fit the coordinates may sometimes cause a crash on Android. Can either remove the padding option or open a ticket. This does not affect iOS.
* Mock data - Application currently loads from the MockData file. There are several TODO statements in the pertinent component files that will all you to load from Actions (asynchronously) instead of MockData by uncommenting certain lines, however, since RN doesn't play well with DDF's unsigned certs, YMMV. There's an HTTP call in Actions that calls Reddit's API for test purposes. You can plug in the DDF endpoint there.
