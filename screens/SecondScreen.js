import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View, Text, Animated } from "react-native";
import { StackActions } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import { FadeInView } from "../components/FadeInView";

export default function SecondScreen({ navigation, route }) {
  // let language = route.params.language;
  // let greeting = language === "french" ? "Bonjour" : "Hello";
  return (
    <View style={styles.View}>
      {/* <Text>{greeting}</Text> */}
      {/* <Button 
        title='Go to Third Screen'
        onPress={() => navigation.push("Third")}
      />
      <Button 
        title='Go to Third Screen with Replace'
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("Third")
          );
        }}
      /> */}
      <FadeInView >
        <Text style={styles.Text}>What is your birthday?</Text>
      </FadeInView>
      <DatePicker
        options={{
          backgroundColor: "#090C08",
          textHeaderColor: "#FFA25B",
          textDefaultColor: "#F6E7C1",
          selectedTextColor: "#fff",
          mainColor: "#F4722B",
          textSecondaryColor: "#D6C7A1",
          borderColor: "rgba(122, 146, 165, 0.1)",
        }}
        current="2023-07-13"
        selected="2020-07-23"
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
      />
      <FadeInView style={styles.FadeInView}>
        <Button
            style={styles.Button}
            title="Submit"
            onPress={() => navigation.navigate("Second", { language: "french" })}
          />
      </FadeInView>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50
  },
  Text: {
    fontSize: 28,
    textAlign: "center",
    margin: 50,
  },
  Button: {
    
  },
  FadeInView: {
    marginTop: 50,
  }
});
