import React from "react";
import renderer from "react-test-renderer";
import ProfileScreen from "../../src/screens/ProfileScreen";
import profileData from "../../src/__mocks__/profileData";

const props = {
  navigation: {
    getParam: jest.fn(),
    goBack: jest.fn(),
    state: {
      params: {
        url: "https://api.github.com/users/mcaleb808"
      }
    }
  }
};

describe("ProfileScreen", () => {
  const tree = renderer.create(<ProfileScreen {...props} />);
  test("renders correctly", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("should should render with empty data", () => {
    let profileData = tree.getInstance();
    expect(profileData.state.profile).toBeDefined();
  });

  test("should render the profile screen with data", () => {
    let profileInstance = tree.getInstance();
    profileInstance.setState({
      profile: profileData
    });
    tree.update();
    expect(profileInstance.state.profile).toHaveLength(1);
  });
});

describe("tests functions", () => {
  const tree = renderer.create(<ProfileScreen {...props} />);
  let profileInstance = tree.getInstance();
  test("should load more data", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        items: profileData
      })
    );
    console.log(profileInstance);
    await profileInstance.componentDidMount();
    profileInstance.getProfile = jest.fn();
    tree.update();
    expect(profileInstance.state.profile).toBeDefined();
  });

  test("should got to GitHub", async () => {
    await profileInstance.toGitHub();
    expect(profileInstance.state.profile).toBeDefined();
  });

  test("should go back", async () => {
    await profileInstance.toHome();
    expect(profileInstance.state.profile).toBeDefined();
  });
});
