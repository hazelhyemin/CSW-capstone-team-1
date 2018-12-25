import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import List from "./List";
import Chat from "./Chat";
import FriendsMatch from "./FriendsMatch";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";


const HomeTabs = createBottomTabNavigator({
  List: {
    screen: List,
    navigationOptions: {
      title: "버디 리스트",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-home${focused ? "" : "-outline"}`
              : "md-home"
          }

        />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "버디 채팅",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-qr-scanner${focused ? "" : "-outline"}`
              : "md-qr-scanner"
          }
        />
      )
    }
  },
  FriendsMatch: {
    screen: FriendsMatch,
    navigationOptions: {
      title: "버디매칭",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-card${focused ? "" : "-outline"}`
              : "md-card"
          }
        />
      )
    }
  }
},
{
  tabBarOptions: {
      activeTintColor: Colors.tintColor,
  }
}
);

export default createStackNavigator(
  { HomeTabs }, 
  { 
//    headerMode: "none" ,
  });
