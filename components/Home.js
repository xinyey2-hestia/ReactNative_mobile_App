import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import Dialog from 'react-native-dialog';
import styles from '../Styles';
import Config from "react-native-config";
//ApiClient.init(WTF)
/* initialize query and env variable to use graphql fetch*/

const fetch = require('node-fetch');
const accessToKen = process.env.HELLO_WORLD;






const query = `
    query {
        viewer {
            bio
            login
            avatarUrl
            createdAt
            email
            name
            followers {
                totalCount
             }
            following {
                totalCount
             }
             repositories {
                 totalCount
              }
             websiteUrl

        }

     }`;


/*
This is the home screen of the app
should show the repo information
of the user defined above.
*/
const accessToken = "860dcba4338853ffe40a14a0b071776f8d3dd743";
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  //Constructor to prepare API Get request.
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      avatar: "",
      Name: "",
      username:"",
      Bio: "",
      Website: "",
      Email:"",
      repocount: "" ,
      followercount:"",
      followingcount:"",
      created_at:"",



    };
  }

  //Get user's information using GitHub's API.
  connect() {
    fetch('https://api.github.com/graphql',{
        method : 'POST',
        body: JSON.stringify({query}),
        headers:{
            'Authorization': `Bearer ${accessToken}`,
        },

    })
      .then(response => response.json())
      .then(responseJson => {

        this.setState({
          loading: false,
      avatar: responseJson.data.viewer.avatarUrl,
      Name:responseJson.data.viewer.Name ,
      username:responseJson.data.viewer.login,
      Bio: responseJson.data.viewer.bio,
      Website: responseJson.data.viewer.websiteUrl,
      Email:responseJson.data.viewer.email,
      repocount: responseJson.data.viewer.repositories.totalCount,
      followercount:responseJson.data.viewer.followers.totalCount,
      followingcount:responseJson.data.viewer.following.totalCount,
      created_at:responseJson.data.viewer.createdAt,
        });
      })

      .catch(error => console.log(error)); //to catch the errors if any
  }

  //Call API when component is mounted.
  componentDidMount() {
    this.connect();


  }

  //Recall API when this page is reused.
  componentDidUpdate() {
    this.connect();
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.header}
          source={{
            uri:
              'https://www.thoughtco.com/thmb/p4x7xUA5AONW8wXwjPo8lW0c-h4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1015068052-1fe5fd16514a4bb49563f692668fdf51.jpg',
          }}
        />
        <Image
          style={styles.avatar}
          source={{
            uri: this.state.avatar,
          }}
        />
         <Image
          style={styles.pic}
          source={
          require('./images.png')
          }
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            {/*Show profile data*/}

            <Text style={styles.name}>Name: {this.state.Name}</Text>
            <Text style={styles.username}>userName: {this.state.username}</Text>
            <Text style={styles.text}>BIO: {this.state.bio}</Text>
            <Text style={styles.text}>Email: {this.state.Email}</Text>
            <Text style={styles.text}>website: {this.state.Website}</Text>

            {/*Clickable link for website*/}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL(this.state.Website)}>
              {this.state.Website}
            </Text>

            {/*Buttons navigate to three other screens*/}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Repo')}>
              <Text style={styles.text}>
                Repositories : {this.state.repocount}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Follower')}>
              <Text style={styles.text}>
                 Followers: {this.state.followercount}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Following')}>
              <Text style={styles.text}>
                 Following : {this.state.followercount}
              </Text>
            </TouchableOpacity>

          </View>
            <Text style={styles.bottext}>

              Joined {(this.state.created_at)}


            </Text>

        </View>
      </View>
    );
  }
}