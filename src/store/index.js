import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (defaultState) => {
  const store = createStore(
    rootReducer,
    defaultState,
    compose(
      applyMiddleware(createLogger()),
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
