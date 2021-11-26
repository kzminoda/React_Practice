import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from 'react-cookie';
import {useCookies} from 'react-cookie';

const OutPut = () => {
    return (
        <CookiesProvider>
            <CookieOperation />
        </CookiesProvider>
    );
}

const CookieOperation = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleChange = (e) => {
        if(e.target.name === 'id'){
            setId(e.target.value);
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
        else{
            console.log('Error...');
        }
    }

    const handleSubmit = () => {
        setCookie("id", id);
        setCookie("password", password);
    }

    const handleDelete = () => {
        removeCookie("id");
        removeCookie("passowrd");
    }

    return (
        <form className="CookieOperation" onSubmit={handleSubmit}>
            <table border="0">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Password</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><input type="text" name="id" onChange={handleChange} /></td>
                <td><input type="password" name="password" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td rowSpan={2}>
                        <input type="submit" value="Save" />
                        <button onClick={handleDelete}>Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
            ID: {cookies.id}<br />
            Password: {cookies.password}<br />
        </form>
    );
}

ReactDOM.render(
    <OutPut />,
    document.getElementById('root')
);