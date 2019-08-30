import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from '../../screens/AppNavigation';
import listkost from './listkost';
import UserData from './userdata'

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  listkost,
  })

export default appReducer

