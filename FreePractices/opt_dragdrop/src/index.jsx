import React from 'react';
import ReactDOM from 'react-dom';
import {useDropzone} from 'react-dropzone';

const App = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li>{file.path}</li>
    ));

    return (
        <div className={'container'}>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag and drop some files hiere, or click to select files.</p>
            </div>
            <ul>
                {files}
            </ul>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)