import React from 'react';
import ReactDOM from 'react-dom';
import QueryString from './Components/QueryString.jsx';

const App = () => {
    return (
        <>
            <QueryString />
        </>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)