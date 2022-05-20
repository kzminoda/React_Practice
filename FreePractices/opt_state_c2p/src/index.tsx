import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {Child} from './Components/Child'

const App = () => {
    const [c, setC] = useState(0)

    const cUp = () => {
        setC(prevc => prevc +1)
    }

    return (
        <>
            <Child />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <App />
    </>
)