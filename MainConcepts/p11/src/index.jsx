import React from 'react';
import ReactDOM from 'react-dom';

const FancyBorder = (props) => {
    return (
        <div className={'FancyBorder FanceyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

const WelcomeDialog = () => {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);