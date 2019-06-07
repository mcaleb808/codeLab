import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";
import { Header } from "react-native-elements";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

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

  render() {
    return (
      <SafeAreaView>
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
        <View style={styles.container}>
          <Image
            source={{
              uri: this.state.profile.avatar_url
            }}
            style={styles.header}
          />
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
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 320,
    margin: 3
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  top: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  body: {
    marginTop: 2
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 20,
    color: "#0091ea",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#696969",
    margin: 15,
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 8,
    backgroundColor: "#0091ea"
  },
  bar: {
    position: "absolute",
    right: 0
  }
});
