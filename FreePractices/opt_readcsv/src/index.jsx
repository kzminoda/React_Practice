import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [Data, setData] = useState();
    const [File, setFile] = useState();

    const handleChange = (e) => {
        let fr = new FileReader();
        setFile(e.target.files[0].name);
        fr.onload = () => {
            setData(fr.result)
        }
        fr.readAsText(e.target.files[0]);
    }

    return (
        <>
            <input type={'file'} multiple={false} onChange={handleChange} />
            <br />
            <br />
            <hr />
            {Data?<DataConvert csv={Data} file={File}/>:''}
        </>
    )
}

const DataConvert = (data) => {
    console.log(JSON.stringify(data.csv));
    console.log(JSON.stringify(data.file));

    const rawData = (typeof data.csv === 'string')?data.csv.split('\n'):'';
    const sData = [];

    for (let i=0; i<rawData.length; i++){
        let tmp = rawData[i].split(',');
        sData.push(tmp);
    }


    return (
        <>
            {JSON.stringify(sData)}
        </>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)