import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import XLSX from 'xlsx';

const App = () => {
    const [excelData, setexcelData] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        const fileObj = e.target.files[0];

        if(fileObj){
            fileObj.arrayBuffer().then((buffer) => {
                const workbook = XLSX.read(buffer, {type: 'buffer', bookVBA: true});
                const sheetname = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetname];
                const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                setexcelData(JSON.stringify(data));
            });
        }
    }

    return (
        <>
            <input type="file" multiple={false} onChange={handleChange} />
            {excelData &&
                <>
                <hr />
                {excelData}
                </>
            }
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)