import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [key, setKey] = useState();

    const keyInput = (e) => {
        setKey(e.target.value);
    }

    const Save = () => {
        if(localStorage){
            localStorage.setItem('key', key);
        }
    }

    const Read = () => {
        if(localStorage){
            console.log(localStorage.getItem('key'));
        }    
    }

    return (
        <>
            <input type="text" onChange={keyInput} />
            <button onClick={Save}>Save</button>
            <button onClick={Read}>Read</button>
        </>
    );
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)