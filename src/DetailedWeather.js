import React from 'react';
import logo from './staticWeatherIcons/day.svg';

class DetailedWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fetched: false, error: null, data: null};
        this.apiKey = "6490b10304ce3133068ed7571ce5e418";
    }

    render() {
        if (this.state.data !== null) {
            if (this.state.data.list !== undefined && this.props.cityName !== undefined) {
                return(
            
                    <div className="weatherDetailed" key={this.props.cityName}>
                        <div>
                            <span className="detailedHeadline">{this.props.cityName}</span><br></br>
                            {this.unixToUtc(this.state.data.list[0].dt)}<br></br>
                            <span className="temp">{Math.floor(this.state.data.list[0].main.temp )}°C</span><br></br>
                            <span className="description"><img src={logo}></img>{this.state.data.list[0].weather[0].description}</span><br></br>
                            
                            
                            Humidity: {this.state.data.list[0].main.humidity} %<br></br>
                            Wind: {this.state.data.list[0].wind.speed} km/h    <br></br>
                            Precipitation: {this.state.data.list[0].pop} %
                        </div>
                    </div>
                );
            }
            else {
                return (<div></div>);
            }
            }
           
        else {
        return (<div>Hallo</div>);
        }
    }

    //Initialize Details for default city (Berlin)
    componentDidMount() {
        // Api Call to OpenWeather to obtain a 5-day forecast
        const link =  "https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid="+this.apiKey+"&units=metric";
        fetch(link)
       .then(res => res.json())
       .then(
        (result) => {
            this.setState({fetched : true, data: result});
        },
        (error) => {
            alert(error.message);
            this.setState({fetched: true, error});
        } 
       )
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.cityName !== prevProps.cityName && this.props.cityName !== undefined) {
            const link =  "https://api.openweathermap.org/data/2.5/forecast?q="+this.props.cityName+"&appid="+this.apiKey+"&units=metric";
            fetch(link)
           .then(res => res.json())
           .then(
            (result) => {
                this.setState({fetched : true, data: result});
            },
            (error) => {
                alert(error.message);
                this.setState({fetched: true, error});
            } 
           )
        }
        
    }
   

    unixToUtc(unixTimestamp) {
        let date = new Date(unixTimestamp*1000);
        return ''+date.getUTCDate() +'.'+ (date.getUTCMonth()+1) +'.'+ date.getUTCFullYear();
    }
}

export default DetailedWeather;