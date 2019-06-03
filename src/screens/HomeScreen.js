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

  arrayholder = [];

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

        this.arrayholder = res.items;
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
          backgroundColor={"#F8F8F8"}
          centerComponent={{
            text: "Developers",
            style: styles.Header
          }}
        />
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="large" color="#1F2A34" />
          ) : (
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => `${item.id}+ ${index}`}
              renderItem={({ item }) => (
                <ListItem
                  roundAvatar
                  title={item.login}
                  key={item.id}
                  containerStyle={styles.list}
                  rightIcon={
                    <Ionicons name="ios-arrow-forward" size={18} color="#ccc" />
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
    color: "#1F2A34",
    fontSize: 20,
    fontWeight: "bold"
  },
  list: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc"
  }
});
