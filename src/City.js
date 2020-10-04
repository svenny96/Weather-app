import { render } from '@testing-library/react';
import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fetched :false, error: null, data: {temp: 0}};
        this.apiKey = "6490b10304ce3133068ed7571ce5e418";
        const test = "test";
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleDivOnClick = this.handleDivOnClick.bind(this);

    }

    render() {
        if(this.state.data === undefined) {
        return ( 
            <div className='cityPreview'>{this.props.cityName}: 0 °C
                <button type='button'>Klick mich!</button>
            </div>
            );
        }
        else {
        return (
            <div className='cityPreview' onClick={this.handleDivOnClick}><h1>{this.props.cityName.toUpperCase()}: {this.state.temp}°C</h1>
                <button type='submit' onClick={this.handleOnClick} class='btn'></button>
            </div>);
        }
        
    }

    componentDidMount() {
        const link = "https://api.openweathermap.org/data/2.5/weather?q=" + this.props.cityName + "&appid="+ this.apiKey+"&units=metric";
        fetch(link)
       .then(res => res.json())
       .then(
        (result) => {
            if (result.cod !== "404") {
                this.setState({fetched : true, temp: Math.floor(result.main.temp)});
            
            }
            else {
                this.setState({fetched : true, temp: result.message});
            }
            
            },
        (error) => {
            this.setState({fetched: true, error});
            alert(error.message)
        } 
       )
    }

    handleOnClick(event) {
        this.props.remove(this.props.cityName);
        event.stopPropagation();
    }

    handleDivOnClick(event) {
        this.props.select(this.props.cityName);
    }

    unixToDate(unixTimestamp) {
        let date = new Date(unixTimestamp*1000);
        return date.toUTCString();
    }

}

export default City;