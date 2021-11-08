import ReactDOM from "react-dom";

const Clock = (props) => {
    return (
        <div>
            <p>{props.date.toLocaleTimeString()}</p>
        </div>
    )
}

const Tick = () => {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("root")
    );
}

setInterval(Tick, 100)