import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import styles from './Styles';
import Home from './Home';
import Repo from './Repo';
import Follower from './components/Follower'
import Following from './components/Following'



//Username of a GitHub repo to start from.
global.gitUserName = 'xinyey2-hestia';
global.personalToken = ''; //Replace with personal access token.


//Structure for the navigatin Drawer
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./arrow.png')}
            style={{ width: 15, height: 15, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

/*
Navigators that controlls
all the screens in this app.
*/
export const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
  Repo: Repo,
  Follower: Follower,
  Following: Following


});

//Another stack for repositories
const repoStack = createStackNavigator({
    Repo: {
    screen: Repo,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
      Follower: Follower,
  Following: Following
});


//Drawer for two screens (home/repositories)
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
    },
   Repo: {
    screen: repoStack,
    navigationOptions: {
      drawerLabel: 'Repos',
    },
  },

});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}