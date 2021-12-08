import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';

const App = () => {
    const [Greeting, setGreeting] = useState(`はじめまして。フリーエンジニアの〇〇と申します。
募集を見て興味を持ったため、連絡させて頂きました。
    `);
    const [MainAppeal, setMainAppeal] = useState();
    const [Proposal, setProposal] = useState();
    const [SubAppeal, setSubAppeal] = useState();

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

    return (
        <>
        <div className={'m-5'}>
            <h1 className={'text-lg font-semibold'}>提案文作成フォーム</h1>
        </div>
        <div className={'flex m-5'}>
                          <div className={'m-3'}>
                            <fieldset className="border w-96 h-96">
                                <legend className={'text-sm'}>提案文</legend>
                                <span className={'whitespace-pre-line text-xs'}>
                                    {Greeting}{Greeting?'\n':''}
                                    {MainAppeal}{MainAppeal?'\n':''}
                                    {Proposal}{Proposal?'\n':''}
                                    {SubAppeal}{SubAppeal?'\n':''}
                                </span>
                            </fieldset>
                        </div>
                        <div className={'text-sm m-3'}>
                            <p className={'mb-3'}>
                                1. 簡単な挨拶<br />
                                <textarea value={Greeting} onChange={changeGreeting} className={'border w-96 h-10 text-xs'}></textarea>
                            </p>
                            <p className={'mb-3'}>
                                2. メインアピール<br />
                                <textarea value={MainAppeal} onChange={changeMainAppeal} className={'border w-96 h-32 text-xs'}></textarea>
                            </p>
                            <p className={'mb-3'}>
                                3. 具体的な提案<br />
                                <textarea value={Proposal} onChange={changeProposal} className={'border w-96 h-11 text-xs'}></textarea>
                            </p>
                            <p className={'mb-3'}>
                                4. サブアピール<br />
                                <textarea value={SubAppeal} onChange={changeSubAppeal} className={'border w-96 h-11 text-xs'}></textarea>
                            </p>
                        </div>
            </div>
            <hr />
            <div className={'mx-5 mt-5 mb-2'}>
                <h1 className={'text-lg font-semibold'}>解説</h1>
            </div>
            <div className={'m-1 h-64 overflow-auto'}>
                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>1. 簡単な挨拶</h2>
                    <p className={'m-2'}>
                        <span className={'text-xs whitespace-pre-line'}>
                            名前と職業を名乗るくらいの簡単な挨拶のみで十分です。
                        </span>
                    </p>
                </div>
                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>2. メインアピール</h2>
                    <p className={'m-2'}>
                        <span className={'text-xs'}>
                        最も重要な部分です。<br />
                        クライアントさんが求める人物像とマッチングできるようなアピールをします。<br />
                        <br />
                        ①理解<br />
                        ②有用性・根拠<br />
                        <br />
                        クライアントさんが今回の発注を通じて何を達成したいのかを理解した上で<br />
                        「自分は〇〇という根拠があるので役に立てる」というメッセージを伝えると、採用率はグッと上がる。<br />　
                        <br />
                        また、過去の実績もここに記載するとよい。<br />
                        実績は多すぎると読んでもらえない可能性がある為、最も自信があるものを2～3個ぐらいでアピールする。
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)