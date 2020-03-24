import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking,
  Button,
} from 'react-native';
import styles from '../Styles';
export default class FollowerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nobody is here</Text>

        <Button
          title="Nothing here"
        />
        </View>



    );
  }
}
