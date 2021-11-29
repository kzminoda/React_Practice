import React from "react";
import ReactDOM from "react-dom";

class DisplayData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount = () => {
        fetch("<<URL>>")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(JSON.stringify(result));
                this.setState({
                    isLoaded: true,
                    items: result,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render(){
        const {error, isLoaded, items} = this.state;
        
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Now Loading...</div>
        }
        else{
            return (
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Handler</th>
                        <th>件数</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <>
                            <tr>
                            <td key={item.Handler}>{item.Handler}</td>
                            <td>{item.Count.toString()}</td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            );
        }
    }
}

ReactDOM.render(
    <DisplayData />,
    document.getElementById('root')
);