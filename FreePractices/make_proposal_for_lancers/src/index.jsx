import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import FuncProposal from './Components/FuncProposal.jsx';

const App = () => {
    const [Greeting, setGreeting] = useState();
    const [MainAppeal, setMainAppeal] = useState('');
    const [Proposal, setProposal] = useState('');
    const [SubAppeal, setSubAppeal] = useState('');

    useEffect(() => {
        if(localStorage){
            if(localStorage.getItem('KeyGreeting')){
                setGreeting(localStorage.getItem('KeyGreeting'));
            }
            if(localStorage.getItem('KeyMainAppeal')){
                setMainAppeal(localStorage.getItem('KeyMainAppeal'));
            }
            if(localStorage.getItem('KeyProposal')){
                setProposal(localStorage.getItem('KeyProposal'));
            }
            if(localStorage.getItem('KeySubAppeal')){
                setSubAppeal(localStorage.getItem('KeySubAppeal'));
            }
        }
    },[])

    const changeGreeting = (e) => {
        setGreeting(e.target.value);
    }

    const changeMainAppeal = (e) => {
        setMainAppeal(e.target.value);
    }

    const changeProposal = (e) => {
        setProposal(e.target.value);
    }

    const changeSubAppeal = (e) => {
        setSubAppeal(e.target.value);
    }

    const submitGreeting = () => {
        localStorage.setItem('KeyGreeting', Greeting);
        console.log('submitGreeting works.');
    }

    const submitMainAppeal = () => {
        localStorage.setItem('KeyMainAppeal', MainAppeal);
        console.log('submitMainAppeal works.');
    }

    const submitProposal = () => {
        localStorage.setItem('KeyProposal', Proposal);
        console.log('submitProposal works.');
    }

    const submitSubAppeal= () => {
        localStorage.setItem('KeySubAppeal', SubAppeal);
        console.log('submitSubAppeal works.');
    }

    return (
        <>
        <div className={'m-5'}>
            <h1 className={'text-lg font-semibold'}>提案文作成フォーム</h1>
        </div>
        <div className={'flex m-5'}>
                          <div className={'m-3'}>
                            <fieldset className="border w-96 h-96 overflow-auto">
                                <legend className={'text-sm'}>提案文</legend>
                                <span className={'whitespace-pre-line text-xs'}>
                                    {Greeting}{Greeting?'\n\n':''}
                                    {MainAppeal}{MainAppeal?'\n\n':''}
                                    {Proposal}{Proposal?'\n\n':''}
                                    {SubAppeal}{SubAppeal?'\n\n':''}
                                </span>
                            </fieldset>
                        </div>
                        <div className={'text-sm m-3'}>
                            <p className={'mb-2'}>
                                1. 簡単な挨拶 <button onClick={submitGreeting} className={'bg-gray-400 text-gray-50 text-xs px-1 m-1 rounded-full'}>登録</button><br />
                                <textarea value={Greeting} onChange={changeGreeting} className={'border w-96 h-10 text-xs'}></textarea>
                            </p>
                            <p className={'mb-2'}>
                                2. メインアピール <button onClick={submitMainAppeal} className={'bg-gray-400 text-gray-50 text-xs px-1 m-1 rounded-full'}>登録</button><br />
                                <textarea value={MainAppeal} onChange={changeMainAppeal} className={'border w-96 h-32 text-xs'}></textarea>
                            </p>
                            <p className={'mb-2'}>
                                3. 具体的な提案 <button onClick={submitProposal} className={'bg-gray-400 text-gray-50 text-xs px-1 m-1 rounded-full'}>登録</button><br />
                                <textarea value={Proposal} onChange={changeProposal} className={'border w-96 h-11 text-xs'}></textarea>
                            </p>
                            <p className={'mb-2'}>
                                4. サブアピール <button onClick={submitSubAppeal} className={'bg-gray-400 text-gray-50 text-xs px-1 m-1 rounded-full'}>登録</button><br />
                                <textarea value={SubAppeal} onChange={changeSubAppeal} className={'border w-96 h-11 text-xs'}></textarea>
                            </p>
                        </div>
            </div>
            <hr />
            <FuncProposal />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)