import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
          }}
        >
          <Image
            source={require("../../../assets/images/beer.jpg")}
            style={{ flex: 1 }}
          />
        
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default HomeScreen;