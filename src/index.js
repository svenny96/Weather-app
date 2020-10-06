
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import CityPreview from './cityPreview';

class App extends React.Component {
  render() {
    return (
      <div className="anchorDiv">
      <CityPreview />
      </div>
      
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


