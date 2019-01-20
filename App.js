import React from "react";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './components/Login'
import Home from './components/Home'
import Chart from './components/Chart'
import Quiz from './components/Quiz'
import About from './components/About'
import Details from './components/Details'


const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Home: {screen: Home},
    Chart: {screen: Chart},
    About: {screen: About},
    Quiz: {screen: Quiz},
    Details: {screen: Details}
  },
  {
      initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);
