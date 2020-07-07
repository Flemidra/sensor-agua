import React, { Component } from 'react';
import axios from 'axios';

class sensorData extends Component {
    constructor(){
        super();
        this.state= {
            rpiSensor: "Loading....",
            count: 0
        };
    }

    update() {
        axios.get("/getSensorData").then(response => {
            console.log(response.data.temp);
            this.setState({
                rpiSensor: response.data
            });
        });
    };

    render() {
        return (
            <div>
                <div className="waterTank"/>
                <h1 className="sensorValue">Sensor de agua: {this.state.rpiSensor} </h1>
                <h1>Count: {this.state.count}</h1>
            </div>
        );
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count +1,
            }))
            this.update()
        }, 500) //velocidad
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}

export default sensorData;