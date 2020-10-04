import React from 'react';

class Snowflakes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var divStyle = {
            left: this.props.xOffset,
            top : '0',
            padding : '0',
            border : '0',
            margin : '0',
            position : 'absolute',
            backgroundColor: 'white',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            animationName : 'fall',
            animationDelay : this.props.delay,
            animationDuration : '4s',
            animationIterationCount : 'infinite',
            animationTimingFunction : 'linear',
            filter : this.props.blur,
            float : 'left',
            transform : 'translate(0y)',
            zIndex : '1',
         };
        return <div className="snowflake" style={divStyle}></div>;
    }
    
    componentDidMount() { 
    }

   

    //Increment count

    

    
}


export default Snowflakes;