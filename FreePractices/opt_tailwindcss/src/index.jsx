import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';

const App = () => {
    return(
        <table className="table-fixed">
            <tr>
                <td className="border px-4 py-2">aaaaa</td>
                <td className="border px-4 py-2">今日のサロン #IT_KINGDOM の朝活では少子高齢化の話に。国としてはマイナスである問題も、個人としては人生の多様化の結果という観点でそこまでマイナスではない可能性も...今日も学び深き朝活でした。日々精進歩く人</td>
            </tr>
        </table>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
