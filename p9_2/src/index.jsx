import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Please write an essay about your favorit DOM element.',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value,
        });
        console.log('t : ' + this.state.value);
    }

    handleSubmit(e){
        console.log('Submited value : ' + this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <br />
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <br />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
);