
import React from 'react';
import CityPreview from './cityPreview';
import * as serviceWorker from './serviceWorker';



class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="anchorDiv">
        <div className='yBar'></div>
          <CityPreview />
        <div className='yBar'></div>
      </div>
      );
  }

  componentDidMount() {
    if('geolocation' in navigator) {
      console.log('Avaiable');
      navigator.geolocation.getCurrentPosition(this.showCurrentPosition);
    }
    console.log('avaiable');
  }

  showCurrentPosition(position) {
    console.log("Latitude: "+position.coords.latitude+", Longitude: "+position.coords.longitude);
  }


}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default Weather;