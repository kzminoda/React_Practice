import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const TestUS = () => {
    const [name, setName] = useState('none');

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    };
    return (
        <div>
            <label>
                <input type="text" onChange={(e) => handleName(e)} value={name}/>
            </label>
        </div>
    );
}

const TestUS2 = () => {
    const [count, setCount] = useState(0);

    const Cup = () => {
        setCount(prevState => prevState +1);
    };
    const Cdown = () => {
        setCount(prevState => prevState -1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={Cup}>UP</button>
            <button onClick={Cdown}>DOWN</button>
        </div>
    )
}

const TestUS3 = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div>
            <button onClick={toggle}>
                {open ? 'OPEN' : 'CLOSE'} 
            </button>
        </div>
    );
}

const AllOut = () => {
    return (
        <div>
            <TestUS />
            <TestUS2 />
            <TestUS3 />
        </div>
    );
}

ReactDOM.render(
    <AllOut />,
    document.getElementById('root')
);