import {eventChannel} from "redux-saga";
import BackgroundGeolocation from "react-native-background-geolocation";


export function geoLocationChannel() {
    if (this.geoLocationChannel) return this.geoLocationChannel;

    const evtChannel = eventChannel((emit) => {
        const onLoc = BackgroundGeolocation.onLocation(this.onLocation, this.onError);
        console.log('onLoc', onLoc)

        return onLoc;
    });

    this.geoLocationChannel = evtChannel;

    return evtChannel;
}



// // This handler fires whenever bgGeo receives a location update.
// BackgroundGeolocation.onLocation(this.onLocation, this.onError);
//
// // This handler fires when movement states changes (stationary->moving; moving->stationary)
// BackgroundGeolocation.onMotionChange(this.onMotionChange);
//
// // This event fires when a change in motion activity is detected
// BackgroundGeolocation.onActivityChange(this.onActivityChange);
//
// // This event fires when the user toggles location-services authorization
// BackgroundGeolocation.onProviderChange(this.onProviderChange);