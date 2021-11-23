import ReactDOM from 'react-dom';

const Hoge = (props) => {
    return (
            <p>{props.name}</p>
    );
};

const Foo = {
    LastName: "abc",
    FirstName: "efg"
};

const Content = () => {
    return (
        <>
            <Hoge name={Foo.LastName+' '+Foo.FirstName} />
            <Hoge name="BBBB" />
            <Hoge name="DDDD" />
            <Hoge name="EEEE" />
        </>
    );
};

ReactDOM.render(
    <Content />,
    document.getElementById('root')
);


