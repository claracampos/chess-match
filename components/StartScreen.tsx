import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./Button";
import { Instructions } from "./Instructions";
import { Color } from "./types";

interface StartScreenProps {
  setPlayer: React.Dispatch<React.SetStateAction<Color | undefined>>;
}

export const StartScreen = ({ setPlayer }: StartScreenProps) => {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.title}>Think Like a Grandmaster!</Text>
        <View>
          <Text style={styles.text}>Pick your player:</Text>
          <Button onPress={() => setPlayer("white")} title="Capablanca" />
          <Button
            onPress={() => setPlayer("black")}
            title="Bogoljubov"
            dark={true}
          />
        </View>

        {showInstructions ? (
          <Instructions onRequestClose={() => setShowInstructions(false)} />
        ) : (
          <TouchableOpacity onPress={() => setShowInstructions(true)}>
            <Text style={styles.toggle}>Instructions</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "#fff", flexDirection: "row" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: 350,
  },
  title: {
    fontSize: 36,
    fontWeight: "200",
    textAlign: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  text: {
    fontWeight: "300",
    marginBottom: 8,
    textAlign: "center",
    fontSize: 20,
  },
  toggle: {
    fontSize: 22,
    fontWeight: "200",
    textTransform: "uppercase",
    marginTop: 50,
  },
});
