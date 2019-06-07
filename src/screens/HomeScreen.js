import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { ListItem, Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { apiUrl } from "../constants/apiUrl";

export default class HomeScreen extends React.Component {
  state = {
    loading: true,
    data: [],
    error: null,
    page: 1
  };

  componentDidMount() {
    this.handleRequest();
  }

  handleRequest = () => {
    const { page } = this.state;
    const url = `${apiUrl}&page=${page}`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.items],
          error: res.message || null,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  loadMoreData = () => {
    this.setState({
      page: this.state.page + 1
    });
    this.handleRequest();
  };

  render() {
    const { loading } = this.state;
    return (
      <SafeAreaView>
        <Header
          backgroundColor={"#0091ea"}
          centerComponent={{
            text: "Developers",
            style: styles.Header
          }}
        />
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="large" color="#00BFFF" />
          ) : (
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => `${item.id}+ ${index}`}
              renderItem={({ item }) => (
                <ListItem
                  onPress={() =>
                    this.props.navigation.navigate("Profile", {
                      username: item.login
                    })
                  }
                  title={item.login}
                  titleStyle={styles.title}
                  key={item.id}
                  containerStyle={styles.list}
                  rightIcon={
                    <Ionicons
                      name="ios-arrow-forward"
                      size={18}
                      color="#81d4fa"
                    />
                  }
                />
              )}
              onEndReached={this.loadMoreData}
              onEndReachedThreshold={1}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  list: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#00BFFF"
  },
  title: {
    color: "#0091ea"
  }
});
