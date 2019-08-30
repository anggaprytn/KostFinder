
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middlewares = [];

const reactNavigation = createReactNavigationReduxMiddleware(
  state => state.nav,
  "root",
);

if (__DEV__) {
  middlewares.push(createLogger());
}

middlewares.push(reactNavigation)
middlewares.push(promise)

export default middlewares;