import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,HashRouter} from "react-router-dom"
import App from './Component/App';
import Apps from "./Router/reactRouter"
import Test from "./Router/test"
// render(<Test/>, document.getElementById('root'));
render(<BrowserRouter>
    <App></App>
</BrowserRouter>, document.getElementById('root'));
