import React from 'react';
import queryString from 'query-string';

/* https://www.npmjs.com/package/query-string */

const QueryString = () => {
    console.log(window.location.search);

    const parsed = queryString.parse(window.location.search);
    console.log(JSON.stringify(parsed));

    return (
        <>
            <p>QueryString Test.</p>
        </>
    )
}

export default QueryString;