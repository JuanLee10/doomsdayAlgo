import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        What is your doomsday?
        
      </Text>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate("Second", { language: "french" })}> 
            <Text>
                I want to find out
            </Text>
      </Pressable>
      {/* <Button 
        title="I want to find out"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      /> */}
      {/* <Button 
        title="Navigate to second screen with english"
        onPress={() => navigation.navigate("Second", { language: "english" })}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    marginBottom: 200,
    fontSize: 30,
  },
  pressable: {
    color: 
    marginBottom: 150,
  },
});