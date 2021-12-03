import React from 'react';
import ReactDOM from 'react-dom';
import {Chart} from 'react-google-charts';

// https://react-google-charts.com/

const Google = () => {
    return (
        <Chart
            width={400}
            height={300}
            chartType={'ColumnChart'}
            loader={'<div>Loading Chart</div>'}
            data={[
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: {width: '100%'},
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City',
                },
            }}
            legendToggle
        />
    );
}

ReactDOM.render(
    <Google />,
    document.getElementById('root')
);