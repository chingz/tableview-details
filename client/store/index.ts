import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import carsReducer from '@client/store/cars/reducer';

export const history = createBrowserHistory();

const configureStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      cars: carsReducer,
    }),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      ),
    ),
  );

  return store;
}

export default configureStore;
