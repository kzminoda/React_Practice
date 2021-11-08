import ReactDOM from 'react-dom';
import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
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
            date: new Date()
        });
    }
    render(){
        return (
            <div>
                <h1>Hello World.</h1>
                <p>It is {this.state.date.toLocaleTimeString()}.</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
