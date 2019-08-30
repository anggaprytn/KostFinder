import React, {Component} from "react";
import { View, Text,Button } from "react-native";

import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';


{/* importing screen */}

import Map from './map'
import LoginPage from './/login'
import AddAdvertisementPage from './/add-iklan'
import RegisterPage from './/register'
import Explore from './Explore'
import SearchKostPage from './CariKost'
import DetailPage from './DetailKost'
import ProfilePage from './profile'
import BookingPage from './Booking'
import ListBookingPage from './ListBooking'



const AuthenticationStack = createStackNavigator({

	login : {
		screen : LoginPage
	},
	register : {
		screen : RegisterPage
	}
})
 

const HomeStack = createStackNavigator({
	explore : {
		screen : Explore
	},

	searchkost : {
		screen : SearchKostPage
	},

	detailkost :  {
		screen : DetailPage
	},

	booking : {
		screen : BookingPage
	},

	listbooking : {
		screen : ListBookingPage
	},

	addadvertisement : {
		screen : AddAdvertisementPage
	},
	profilePage : {
		screen : ProfilePage
	}
})

const AppNavigator = createSwitchNavigator({
	Authentication : {
		screen : AuthenticationStack
	},

	Home : {
		screen : HomeStack
	}
})

const AppRootNavigator = createAppContainer(AppNavigator)

export default AppRootNavigator

