import React from 'react';
import ReactDOM from 'react-dom';

const WarningBanner = (props) => {
    if(!props.warn){
        return null;
    }
    else{
        return (
            <div className="warning">
                Warning!
            </div>
        );
    }
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)