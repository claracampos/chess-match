import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

interface IntructionsProps {
  onRequestClose: () => void;
}

export const Instructions = ({ onRequestClose }: IntructionsProps) => {
  return (
    <Modal onRequestClose={onRequestClose}>
      <ScrollView style={styles.container}>
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
          <Text style={[styles.bold, styles.italic]}>you</Text> trade a bishop
          for a pawn?
        </Text>
        <Text style={styles.heading}>Developer's Notes:</Text>
        <Text style={styles.text}>
          This app is based on the 1962 book{" "}
          <Text style={styles.italic}>Solitaire Chess</Text> by I. A. Horowitz
          and features the match from page 21 ("Sacrificial Orgy", Capablanca vs
          Bogoljubov). I built it because I was learning React Native at the
          time and love high skill chess. Despite my love for the game, I am not
          great at it, which makes my own matches very boring, so this little
          project scratched a particular itch!
          <Text style={styles.italic}> - Clara Campos</Text>
        </Text>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14,
    paddingTop: 0,
    margin: 12,
    marginTop: 36,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
  },
  heading: {
    fontSize: 24,
    fontWeight: "200",
    textAlign: "center",
    marginTop: 28,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  },
  bold: { fontWeight: "600" },
  italic: { fontStyle: "italic" },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 6,
  },
});
