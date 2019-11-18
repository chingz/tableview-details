import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import CarTable from '@client/pages/car-table';
import CarDetail from '@client/pages/car-detail';

import createStore, { history } from '@client/store';

import 'antd/dist/antd.css';

const store = createStore();
const app = document.createElement('div');
document.body.appendChild(app);

const render = () => 
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <Switch>
              <Route path="/cars/:id" component={CarDetail} />
              <Route exact path="/cars" component={CarTable} />
              <Redirect from="*" to="/cars" />
            </Switch>
          </Router>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    app
  );

render();

if (module.hot) {
  module.hot.accept('./index.tsx', () => render());
}
