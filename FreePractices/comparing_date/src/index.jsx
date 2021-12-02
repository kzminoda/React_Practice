import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const ComparingDate = () => {
    const D1 = '2021-12-30';
    const D2 = '2020-10-01';
    const D3 = '2021-10-01';

    const DC = '2021-10-01';

    console.log(moment(DC).isAfter(moment(D1)));

    return (
        <div>
            <h2 className={moment(DC).isAfter(moment(D1))?'late':(moment(DC).isSame(moment(D1))?'same':'early')}>Comparison of {DC} and {D1}</h2>
            <h2 className={moment(DC).isAfter(moment(D2))?'late':(moment(DC).isSame(moment(D2))?'same':'early')}>Comparison of {DC} and {D2}</h2>
            <h2 className={moment(DC).isAfter(moment(D3))?'late':(moment(DC).isSame(moment(D3))?'same':'early')}>Comparison of {DC} and {D3}</h2>
        </div>
    );
}

const UseMoment = () => {
    const now = moment();

    return (
        <div>
            {now.format()}
        </div>
    );
}

ReactDOM.render(
    <UseMoment />,
    document.getElementById('root')
)
