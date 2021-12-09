import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';

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
        console.log('submitGreeting works.');
    }

    const submitMainAppeal = () => {
        console.log('submitMainAppeal works.');
    }

    const submitProposal = () => {
        console.log('submitProposal works.');
    }

    const submitSubAppeal= () => {
        console.log('submitSubAppeal works.');
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
            <div className={'mx-5 mt-5 mb-2'}>
                <h1 className={'text-lg font-semibold'}>解説</h1>
            </div>

            <div className={'m-1 h-64 overflow-auto'}>
                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>1. 簡単な挨拶</h2>
                    <div className={'m-2 text-xs'}>
                        <p>
                            名前と職業を名乗るくらいの簡単な挨拶のみで十分です。
                        </p>
                    </div>
                </div>

                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>2. メインアピール</h2>
                    <div className={'m-2 text-xs'}>
                        <p>
                            最も重要な部分です。<br />
                            クライアントさんが求める人物像とマッチングできるようなアピールをします。<br />
                            <br />
                        </p>
                        <ul className={'list-inside list-decimal'}>
                            <li>理解</li>
                            <li>有用性・根拠</li>
                        </ul>
                        <p><br /></p>
                        <p>
                            クライアントさんが今回の発注を通じて何を達成したいのかを理解した上で<br />
                            「自分は〇〇という根拠があるので役に立てる」というメッセージを伝えると、採用率はグッと上がる。<br />　
                            <br />
                            また、過去の実績もここに記載するとよい。<br />
                            実績は多すぎると読んでもらえない可能性がある為、最も自信があるものを2～3個ぐらいでアピールする。
                        </p>
                    </div>                    
                </div>    

                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>3. 具体的な提案</h2>
                    <div className={'m-2 text-xs'}>
                        <p>
                            この部分は無くてもOK。<br />
                            <br />
                        </p>
                        <ul className={'list-inside list-disc'}>
                            <li>クライアントさんが提示する報酬額＋αで提案をしたいとき</li>
                            <li>納期が前倒しできそうなとき</li>
                            <li>クライアントさんの納期設定が曖昧だったとき</li>
                        </ul>
                        <p><br /></p>
                        <p>
                            ここで心掛けるポイント：<br />
                            <br />
                        </p>
                        <ul className={'list-inside list-disc'}>
                            <li>「ランサーズ手数料および税」の込み or 抜きを明記する。</li>
                            <li>納期は日付だけでなく、時間まで明記する。</li>
                        </ul> 
                    </div>
                </div>

                <div className={'m-5'}>
                    <h2 className={'text-sm underline'}>4. サブアピール</h2>
                    <div className={'m-2 text-xs'}>
                        <p>
                            ここは毎回テンプレでもOK。<br />
                            <br />
                        </p>
                        <p>
                            ここで心掛けるポイント：<br />
                            <br />
                            メインアピールに加えた、追加アピールを記載します。<br />
                            「精一杯頑張ります！」ではなく、<b>具体的にどんな姿勢で取る組むのか</b>を記載する。<br />
                            <br />
                            この部分は、自分だけでなく他人にでもできる事なので重要度は高くありません。<br />
                            よって、サブアピールの文章は提案分の一番最後に持ってきます。
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)