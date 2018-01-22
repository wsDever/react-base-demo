/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import Header from './js/components/header';
import reducers from './js/reducers';
import './static/app.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '这是一句话'
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} refs="header" />
      </div>
    );
  }
}
// 不使用redux
// ReactDom.render(<Index />, document.getElementById("myApp"));
// 使用redux
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Index />
  </Provider>,
  document.getElementById('myApp')
);
