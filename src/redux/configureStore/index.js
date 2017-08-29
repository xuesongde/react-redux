import { createStore, applyMiddleware ,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const debugware = [];
export default function configureStore(history, initialState) {
  const store = createStore(
  rootReducer,
  initialState, 
  compose(
    applyMiddleware(thunkMiddleware, routerMiddleware(history), ...debugware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}