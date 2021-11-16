//import React from 'react';
import ReactDOM from 'react-dom';

const Foo = () => {
    const bar = (
        <div>
            <h1>Now Time.</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(
        bar,
        document.getElementById('root')
    );
};

setInterval(Foo, 1000);
