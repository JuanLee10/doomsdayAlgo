import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View, Text, Animated } from "react-native";
import { FadeInView } from "../components/FadeInView";

export default function InfoScreen({ navigation , route }) {
    let selectedDate = route.params.date;
    
    return (
    <View style={styles.View}>
      <FadeInView style={styles.FadeInView}>
        <Text style={styles.Text}>{selectedDate}</Text>
        <Button
          style={styles.Button}
          title="Start"
          onPress={() => navigation.navigate("Birthday", { language: "french" })}
        />
      </FadeInView>
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
  Button: {
    backgroundColor: "#1E6738",
    textAlign: "center",
  },
  FadeInView: {
    width: 500,
    height: 200,
  },
});
