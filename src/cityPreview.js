import React from 'react';
import City from './City';
import DetailedWeather from './DetailedWeather';
import Snowflakes from './snowflakes';


class cityPreview extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {cityNames : ['Berlin'], item: '', selectedCity: 'Berlin'};
        //Bind Callback functions to this class
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange =  this.handleOnChange.bind(this);
        this.removeCity = this.removeCity.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    
    }

    render() {
        return (
            <div className='weatherData'>
            <div className='cityList'>
                <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleOnChange}></input>
                    <button type='submit'>+</button>
                </form>
                </div>
                
                {this.state.cityNames.map(i => {
                    return (<City cityName={i} remove={this.removeCity} select={this.changeSelected}/>);
                })}
            </div>
            
                <DetailedWeather cityName={this.state.selectedCity}/>
            
            </div>
       )
   }

   handleSubmit(event) {
        const cityNames = this.state.cityNames;
        const item = this.state.item;
        event.preventDefault();
        this.setState({cityNames: [...cityNames, item] });
        
   }

   removeCity(cityName) {
        var array = [...this.state.cityNames];
        var toDelete = array.indexOf(cityName);
        array.splice(toDelete,1);
        if(this.state.selectedCity===cityName) {
            this.setState({cityNames: array, selectedCity: array[array.length-1]});
        }
        else {
            this.setState({cityNames: array });
        }
       
   }
   
   handleOnChange(event) {
       this.setState({item: event.target.value});
   }

   componentDidMount() {   
   }

   changeSelected(cityName) {
    this.setState({selectedCity: cityName });

   }

   getRandomInt() {
    var randomInt = Math.random();
    for (var i=0;i<arguments.length;i++) {
      randomInt = randomInt * arguments[0];
    } 
    console.log(randomInt); 
    return randomInt;
  }

}

export default cityPreview;