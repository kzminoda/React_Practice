import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route key="/About" path="/About" element={<About />} />
                    <Route key="/ContactUs" path="/ContactUs" element={<ContactUs />} />
                    <Route key="/" path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const Home = () => {
    return <p>This is Home Page.</p>;
}

const About = () => {
    return <p>This is About Page.</p>;
}

const ContactUs = () => {
    return <p>THis is a ContactUs.</p>;
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);