import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from 'react-cookie';
import {useCookies} from 'react-cookie';

const Output = () => {
    return (
            <CookiesProvider>
                <TestCookie />
            </CookiesProvider>
    );
}

const TestCookie = () => {
    const [name, setName] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
  
    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleDelete = () => {
      removeCookie("name");
    };
    const handleSubmit = () => {
      setCookie("name", name);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <input type="submit" value="Save" />
          <button onClick={handleDelete}>Delete</button>
          {cookies.name}
        </form>
      </div>
    ); 
}

ReactDOM.render(
    <Output />,
    document.getElementById('root')
);