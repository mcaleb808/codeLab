import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";
import { Header } from "react-native-elements";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import styles from "./profileStyles";

export default class Profile extends Component {
  state = {
    profile: {},
    error: ""
  };
  componentDidMount() {
    this.getProfile();
  }
  toHome = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  getProfile = () => {
    const { navigation } = this.props;
    const username = navigation.getParam("username");
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          profile: res,
          error: res.message || null,
          loading: false
        });
        console.log(this.state.profile);
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  toGitHub = () => {
    const { navigation } = this.props;
    const username = navigation.getParam("username");
    const url = `https://github.com/${username}`;
    Linking.openURL(url);
  };

  renderHeader = () => {
    return (
      <Header
        backgroundColor={"#0091ea"}
        leftComponent={() => (
          <TouchableOpacity onPress={this.toHome}>
            <Ionicons name="md-home" size={30} color="#fff" />
          </TouchableOpacity>
        )}
        centerComponent={{
          text: "Profile",
          style: styles.top
        }}
      />
    );
  };

  renderBody = () => {
    return (
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{this.state.profile.name}</Text>
          <Text style={styles.info}>
            <Text>{this.state.profile.followers} Followers -</Text>
            <Text> {this.state.profile.public_repos} Repositories</Text>
          </Text>
          <Text style={styles.info}>
            <Text>{this.state.profile.following} Following -</Text>
            <Text> 0 Stars</Text>
          </Text>
          <TouchableOpacity
            onPress={this.toGitHub}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Go to GitHub</Text>
          </TouchableOpacity>
          <SimpleLineIcons name="share-alt" size={50} color="#0091ea" />
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        {this.renderHeader()}
        <View style={styles.container}>
          <Image
            source={{
              uri: this.state.profile.avatar_url
            }}
            style={styles.header}
          />
          {this.renderBody()}
        </View>
      </SafeAreaView>
    );
  }
}
