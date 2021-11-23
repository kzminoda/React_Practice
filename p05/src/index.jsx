<<<<<<< HEAD
import ReactDOM from "react-dom";

const Clock = (props) => {
    return (
        <div>
            <p>{props.date.toLocaleTimeString()}</p>
        </div>
    )
}

const Tick = () => {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("root")
    );
}

setInterval(Tick, 100)
=======
import ReactDOM from 'react-dom';
import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            comment: "Hello!"
        };
    }
    componentDidMount(){
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentDidUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date(),
            comment: "Hi!"
        });
    }
    render(){
        return (
            <div>
                <h1>Hello World.</h1>
                <p>It is {this.state.date.toLocaleTimeString()}.</p>
                <p>{this.state.comment}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
>>>>>>> 671965d9af0532541646f95014bfff287f55d960
