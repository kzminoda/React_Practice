import React from 'react';
import ReactDOM from 'react-dom';
import Aaa from './Components/Aaa.jsx';
import Bbb from './Components/Bbb.jsx';
import {Ccc1, Ccc2} from './Components/Ccc.jsx';

const App = () => {
    return (
        <>
            <Aaa />
            <Bbb />
            <Ccc1 />
            <Ccc2 />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)