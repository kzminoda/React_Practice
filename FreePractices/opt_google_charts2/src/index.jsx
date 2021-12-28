import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Chart} from 'react-google-charts';

const App = () => {
    const [W, setW] = useState('100');
    const [H, setH] = useState('100');

    useEffect(() => {
        console.log('useEffect was run.');
        console.log('W=' + W);
        console.log('H=' + H);
    });

    const handleChangeW = (e) => {
        setW(e.target.value);
        console.log('handleChangeW was run -> ' + e.target.value + '(' + W + ')');
    }

    const handleChangeH = (e) => {
        setH(e.target.value);
        console.log('handleChangeH was run -> ' + e.target.value + '(' + H + ')');
    }

    return(
        <>
        <h1>Google Chart Test</h1>
        <hr />
        W: <input type="text" onChange={handleChangeW} value={W} /><br />
        H: <input type="text" onChange={handleChangeH} value={H} />
        <hr />
        <Output W={W} H={H} />
        </>
    );
}

const Output = (p) => {
    const W = p.W + 'px';
    const H = p.H + 'px';
    console.log('W==' + W);
    console.log('H==' + H);

    return (
        <>
            W: {W}<br />
            H: {H}<br />
            <hr />
            <Chart
                    width={W}
                    height={H}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    [
                        'aaa', 'bbb', 'ccc','ddd','eee','ffff', 'gggg','hhhhh'
                    ],
                        [1, 100, 90, 110, 85, 96, 104, 120],
                        [2, 120, 95, 130, 90, 113, 124, 140],
                        [3, 130, 105, 140, 100, 117, 133, 139],
                        [4, 90, 85, 95, 85, 88, 92, 95],
                        [5, 70, 74, 63, 67, 69, 70, 72],
                        [6, 30, 39, 22, 21, 28, 34, 40],
                        [7, 80, 77, 83, 70, 77, 85, 90],
                        [8, 100, 90, 110, 85, 95, 102, 110],
                    ]}
                    options={{
                    intervals: { style: 'sticks' },
                    legend: 'none',
                    }}
            />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
