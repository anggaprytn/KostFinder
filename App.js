import React, {Component} from "react";
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import {store} from './redux/store'

import AppRootNavigator from './screens/AppNavigation'


export default class App extends Component{
	render(){
		return(
			<Provider store={store}>
				<AppRootNavigator/>
			</Provider>
		)
	}
}