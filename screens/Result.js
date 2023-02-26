import { StyleSheet, Button, View, Text } from "react-native";
import { FadeInView } from "../components/FadeInView";
import { useState } from "react";

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const doomsdayArrayLeapYear = [4, 1, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5];
const doomsdayArrayNotLeapYear = [3, 7, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5];

function getResults(selectedDate) {
  const [yearSelect, monthSelect, daySelect] = selectedDate;
  const resultStr = "1. Divide the last 2 digits of year by 12 : ";

  const year2Digits = yearSelect.slice(-2);
  const calc1 = Math.floor(year2Digits / 12);

  let calc2 = year2Digits - calc1 * 12;
  const calc3 = Math.floor(calc2 / 4);
  const firstDigitYear = String(yearSelect).charAt(0);
  const anchorNum = firstDigitYear === "1" ? 3 : 2;
  const calc4 = calc1 + calc2 + calc3 + anchorNum;

  const calc5 = calc4 % 7;
  const leapYear =
    yearSelect % 4 === 0 && (yearSelect % 100 !== 0 || yearSelect % 400 === 0);

  const monthIndex =
    (monthSelect.length == 2 && monthSelect <= 9
      ? monthSelect[1]
      : monthSelect) - 1;
  let dayIndex, doomsdayDay;

  if (leapYear) {
    doomsdayDay = doomsdayArrayLeapYear[monthIndex];
  } else {
    doomsdayDay = doomsdayArrayNotLeapYear[monthIndex];
  }

  if (daySelect < doomsdayDay) {
    dayIndex = calc5 - (doomsdayDay - daySelect);
  } else {
    dayIndex = calc5 + (daySelect - doomsdayDay);
  }

  const result = `${resultStr}${year2Digits} / 12 = ${calc1}
  2. Get the difference between the years last 2 digits and the previous result * 12 : ${year2Digits} - (${calc1} * 12) = ${calc2}
  3. Divide previous result by 4 : ${calc2} / 4 = ${calc3}
  4. Add all results plus the anchor day value : ${calc1} + ${calc2} + ${calc3} + ${anchorNum} = ${calc4}
  5. Take the modulus of 7 from the previous result to get Doomsday : ${calc4} % 7 = ${calc5} (${
    dayArr[calc5]
  })
  6. Is it a leap year? ${leapYear.toString()}
  7. Add or Subtract previous result from the Doomsday number to find this dates day : ${calc5} - (${doomsdayDay} - ${daySelect}) = ${dayIndex} (${
    dayArr[dayIndex % 7]
  })`;
  return result;
}

export default function ResultScreen({ navigation, route }) {
  let selectedDate = route.params.date.split("/");

  let message = getResults(selectedDate);

  return (
    <View style={styles.View}>
      <FadeInView style={styles.FadeInView}>
        <Text style={styles.Text}> {message}</Text>
        <Button
          style={styles.Button}
          title="Start Over"
          onPress={() =>
            navigation.navigate("Home", {
              message: message,
              date: route.params.date,
            })
          }
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
    bottom: 80,
  },
  Text: {
    fontSize: 17,
    textAlign: "center",
    margin: 50,
    adjustsFontSizeToFit: true,
    numberOfLines: 1,
    height: 250,
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
