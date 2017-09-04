import React,{Component} from 'react'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../redux/configureStore'
import Example  from './example';
import NextStep from './next-step';

export default class Root extends Component{
  render(){
    const store = configureStore();
    const history = syncHistoryWithStore(hashHistory, store);
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/"            component = {Example}/>
          <Route path="/next-step/:img"   component = {NextStep}/>
        </Router>
      </Provider>
    )
  }
}
