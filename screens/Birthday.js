import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Button, View, Text, Animated } from "react-native";
import { StackActions } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import { FadeInView } from "../components/FadeInView";

export default function BirthdayScreen({ navigation, route }) {
  // let language = route.params.language;
  // let greeting = language === "french" ? "Bonjour" : "Hello";
  const today = new Date()
    .toLocaleDateString("en-us", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .split("/");

  const [date, setDate] = useState(`${today[2]}/${today[0]}/${today[1]}`);

  return (
    <View style={styles.View}>
      <FadeInView>
        <Text style={styles.Text}>When is your birthday?</Text>
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
        selected={date}
        date={date}
        onDateChange={setDate}
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
      />
      <FadeInView style={styles.FadeInViewButtons}>
        <Button
          style={styles.Button}
          title="Submit"
          onPress={() => navigation.navigate("Result", { date: date })}
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
  },
  Text: {
    fontSize: 28,
    textAlign: "center",
    margin: 50,
  },
  FadeInViewButtons: {
    margin: 30,
  },
});
