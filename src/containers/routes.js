import React,{Component} from 'react'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../redux/configureStore'
import Example  from './example';
import NextStep from './next-step';
import List from './list';
import Drag from './drag';
import DragBeautiful from './dragBeautiful';
import ReactTree from './reactTree';


export default class Root extends Component{
  render(){
    const store = configureStore();
    const history = syncHistoryWithStore(hashHistory, store);
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/"            component = {Example}/>
          <Route path="/next-step/:img"   component = {NextStep}/>
          <Route path="/list"   component = {List}/>
          <Route path="/drag"   component = {Drag}/>
          <Route path="/drag-beautiful"   component = {DragBeautiful}/>
          <Route path="/react-tree"   component = {ReactTree}/>
        </Router>
      </Provider>
    )
  }
}
