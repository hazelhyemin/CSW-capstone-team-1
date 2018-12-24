// import {Navigation} from 'react-native-navigation';
// import {registerScreens} from '../../screens';
// import {registerComponents} from '../../components';

import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Main from "./Main";
import Review from "./Review";
import TabBarIcon from "../../components/TabBarIcon";

// registerScreens();
// registerComponents();


const OwnerTabs = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
          title: "비어샵 정보",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? `ios-analytics${focused ? "" : "-outline"}`
                  : "md-analytics"
              }
            />
          )
        }
      },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "비어샵 리뷰",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused} 
          name={
            Platform.OS === "ios"
              ? "ios-create"
              : "md-create"
          }
        />
      )
    }
  },
}
);
export default createStackNavigator(
  { OwnerTabs }, 
);
