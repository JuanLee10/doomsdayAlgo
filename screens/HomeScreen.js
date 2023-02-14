import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View, Text, Animated } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.View}>
      <FadeInView style={styles.FadeInView}>
        <Text style={styles.Text}>What is your doomsday?</Text>
        <Button
          style={styles.Button}
          title="Start"
          onPress={() => navigation.navigate("Second", { language: "french" })}
        />
      </FadeInView>
    </View>
  );
}
// http://reactnative.dev/docs/animations
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

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
