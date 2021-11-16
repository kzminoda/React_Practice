import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [0, 1, 2, 3, 4, 5];

const ListItem = (props) => {
    const value = props.value **2;
    return (
        <li key={value.toString()}>
            {value}
        </li>
    );
}

const NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((numbers) =>
        <ListItem value={numbers} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);