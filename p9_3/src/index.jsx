import React from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'coconut',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
        console.log('hChange: ' + this.state.value + ' ' + e.target.value);
    }

    handleSubmit(e){
        console.log('Your favoite flavor is: ' + this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor: <br />
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">GrapeFruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
)
