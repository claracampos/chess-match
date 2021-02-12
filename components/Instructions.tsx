import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IntructionsProps {
  onRequestClose: () => void;
}

export const Instructions = ({ onRequestClose }: IntructionsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRequestClose} style={styles.closeButton}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>How this works:</Text>
      <Text style={styles.text}>
        - You must make the same moves that were made in the actual match.
        {"\n"}- You can get tips on the move you're supposed to make.
        {"\n"}- If you try to move the wrong piece or the right piece to the
        wrong square, it will stay put.
        {"\n"}- Once you select the right piece for the move, its square will
        turn green.
      </Text>
      <Text style={styles.heading}>But what's the point?</Text>
      <Text style={styles.text}>
        To experience the difference between how you play chess and how a
        grandmaster plays chess. Would{" "}
        <Text style={[styles.bold, styles.italic]}>you</Text> trade a bishop for
        a pawn?
      </Text>
      <Text style={styles.heading}>Developer's Notes:</Text>
      <Text style={styles.text}>
        This app is based on the 1962 book{" "}
        <Text style={styles.italic}>Solitaire Chess</Text> by I. A. Horowitz and
        features the match from page 21 ("Sacrificial Orgy", Capablanca vs
        Bogoljubov). I built it because I was learning React Native at the time
        and love high skill chess. Despite my love for the game, I am not great
        at it, which makes my own matches very boring, so this little project
        scratched a particular itch!
        <Text style={styles.italic}> - Clara Campos</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    paddingTop: 0,
    margin: 8,
    marginTop: 50,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
  },
  heading: {
    fontSize: 22,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 14,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 14,
  },
  bold: { fontWeight: "600" },
  italic: { fontStyle: "italic" },
  closeButton: {
    position: "absolute",
    right: 12,
    top: 6,
  },
});