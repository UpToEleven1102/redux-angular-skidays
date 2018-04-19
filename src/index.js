import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import sampleData from './initialState.json'
import storeFactory from './store'
import { Provider } from 'react-redux'
import {addError} from './actions'

const initialState = localStorage["redux-state"] ? JSON.parse(localStorage["redux-state"]) : sampleData
const store = storeFactory(initialState)

const saveState = () => {
    localStorage.setItem("redux-state", JSON.stringify(store.getState()))
}
store.subscribe(saveState)

const errorHandler = (error) => {
    store.dispatch(addError(error.message))
}
window.addEventListener("error", errorHandler)

// window.React = React
window.store = store

const mountNode = document.getElementById('react-container')
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, mountNode )

