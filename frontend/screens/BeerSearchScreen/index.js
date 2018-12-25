import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import BeerSearch from "./BeerSearch";
import BeerRec from "./BeerRec";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";


const HomeTabs = createBottomTabNavigator({
    BeerSearch: {
    screen: BeerSearch,
    navigationOptions: {
      title: "맥주 검색",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-search${focused ? "" : "-outline"}`
              : "md-search"
          }

        />
      )
    }
  },
  BeerRec: {
    screen: BeerRec,
    navigationOptions: {
      title: "맥주 추천",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-ionitron${focused ? "" : "-outline"}`
              : "md-ionitron"
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
