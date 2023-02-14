import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View, Text, Animated } from "react-native";
import { StackActions } from "@react-navigation/native";

// http://reactnative.dev/docs/animations
export const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
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