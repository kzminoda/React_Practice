import Test from './components/Test.jsx';

const CallTest = () => {
    const number = [1,2,3,4,5];
    const listItems = number.map((number) => 
        <li>{number}</li>
    );
    return (
        <div>
            <Test
                title = {'Title Test'}
                content = {'Content Test'}
            />
            <Test
                title = {'Title Test1'}
                content = {'Content Test1'}
            />
            <Test
                title = {'Title Test2'}
                content = {listItems}
            />
            <Test
                title = {'Title Test'}
                content = {
                    number.map((number) => 
                        <dd>{number}</dd>
                    )
                }
            />
        </div>
    );
};

export default CallTest;