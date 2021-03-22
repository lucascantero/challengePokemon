import React from 'react'
import ReactDom from 'react-dom'
import App from './app.jsx'
import {BrowserRouter} from 'react-router-dom'


ReactDom.hydrate(<BrowserRouter> <App/></BrowserRouter>,document.getElementById('root'))
