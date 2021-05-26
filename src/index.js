import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import RootReducers from './reducers/RootReducers';
import {Provider} from 'react-redux'
import WebPage from './Component/WebPage'

const store = createStore(RootReducers)


ReactDOM.render(
  <Provider store = {store}> 
    <WebPage/>
  </Provider>,
  document.getElementById('root')
)