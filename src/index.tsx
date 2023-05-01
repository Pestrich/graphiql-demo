import {createGraphiQLFetcher} from '@graphiql/toolkit';
import {GraphiQL} from 'graphiql';
import React from 'react';
import ReactDOM from 'react-dom';

import 'graphiql/graphiql.css';

const fetcher = createGraphiQLFetcher({url: 'https://countries.trevorblades.com/'});

ReactDOM.render(
    <GraphiQL fetcher={fetcher}/>,
    document.getElementById('root'),
);
