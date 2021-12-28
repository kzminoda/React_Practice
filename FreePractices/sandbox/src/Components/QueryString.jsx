import React from 'react';
import queryString from 'query-string';

/* https://www.npmjs.com/package/query-string */

const QueryString = () => {
    console.log(window.location.search);

    const parsed = queryString.parse(window.location.search);
    console.log(JSON.stringify(parsed));

    let mode = '';

    if(parsed.mode === '1'){
        mode = 'aaa';
    }
    else if(parsed.mode === '2'){
        mode = 'bbb';
    }
    else if(parsed.mode === '3'){
        mode = 'ccc';
    }
    else{
        mode = 'etc';
    }

    return (
        <>
            <p>QueryString Test.</p>
            <div>
                <a href={'?mode=1'}>aaa</a><br />
                <a href={'?mode=2'}>bbb</a><br />
                <a href={'?mode=3'}>ccc</a>
            </div>
            <hr />
            {mode}
        </>
    )
}

export default QueryString;