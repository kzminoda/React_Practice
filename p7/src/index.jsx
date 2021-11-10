import React from 'react';
import ReactDOM from 'react-dom';

const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>
}

const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>
}

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    else{
        return <GuestGreeting />;
    }
}

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLogicClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick.bind = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedin: true});
    } 

    handleLogoutClick(){
        this.setState({isLoggedin: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else{
            button = <LoginButton onClick={this.handleLoginClick()} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    };
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);