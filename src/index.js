import App from "./containers/app"
import React from 'react'
import ReactDOM  from 'react-dom'

import {Provider} from "react-redux"
import store from "./store"

window.React = React


store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "CHANGENAME",
    payload: "alaDIn motherfucker"
});




ReactDOM.render(
    <div id="root">
        <h1>Hello, world!</h1>
        <Provider store = {store}>
            <App/>
        </Provider>

    </div>,
    document.getElementById('main')
)



