import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking,
  Button,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { createStackNavigator } from 'react-navigation-stack';













export default class wtf extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from home!</Text>

        <Button
          title="Go To Profile"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>



    );
  }
}


