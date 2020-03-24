import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

//const fetch = require('node-fetch');

//
//const query = `
//    query {
//       viewer {
//    repositories(first: 100) {
//      nodes {
//        description
//        name
//        owner {
//          login
//        }
//      }
//    }
//  }
//
//     }`;



/*
This is the screen that shows
all the repositories of the user
from GitHub API.
*/
export default class RepoScreen extends React.Component {
  //Set the title of this screen.
  static navigationOptions = {
    title: 'Public Repositories',
  };

  //Constructor to prepare API Get request.
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
    //Create a copy array to store filtered items during search.
    this.searchArray = [];
  }

  //Read repo info from API.
  componentDidMount() {
    fetch('https://api.github.com/users/'.concat(gitUserName).concat('/repos'))
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          data: responseJson,
        });
        this.searchArray = responseJson; //Saves another copy of data.
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }



  //Get URL of each repo so that it can be clicked.
  clickEventListener = item => {
    Linking.openURL(item.html_url);
  };

  render() {
    //Renders output on the screen
    return (
      <View style={styles.repoContainer}>
        <FlatList
          style={styles.repoLists}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.repoCard,
                  { borderColor: 'black' },
                ]}
                onPress={() =>
                  this.props.navigation.navigate('Visualization', {
                    repoName: item.name,
                  })
                }>
                <View style={styles.repoCardContent}>
                  <Text style={styles.repoDescription}>{item.owner.login}</Text>
                  <Text style={styles.repoName}>{item.name}</Text>
                  <Text style={styles.repoDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}