import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../../src/screens/HomeScreen";
import data from "../../src/__mocks__/data";

console.error = jest.fn();

describe("HomeScreen", () => {
  const tree = renderer.create(<HomeScreen />);
  test("renders correctly", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("should should render with empty data", () => {
    let homeData = tree.getInstance();
    expect(homeData.state.data).toBeDefined();
  });

  test("should render the home screen with data", () => {
    let homeData = tree.getInstance();
    homeData.setState({
      data: data,
      loading: false
    });
    tree.update();
    expect(homeData.state.data).toHaveLength(3);
  });

  describe("tests functions", () => {
    const tree = renderer.create(<HomeScreen />);
    test("should load more data", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          items: data
        })
      );
      let homeData = tree.getInstance();
      await homeData.componentDidMount();
      homeData.handleRequest = jest.fn();
      tree.update();
      await homeData.loadMoreData();
      expect(homeData.state.page).toEqual(1);
      expect(homeData.handleRequest).toHaveBeenCalledTimes(1);
    });
  });
});
