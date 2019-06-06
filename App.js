import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    headerMode: "none"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
