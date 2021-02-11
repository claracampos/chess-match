import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Chessboard } from "./Chessboard";
import { Color } from "./types";
import { capablanca, bogoljubov } from "../lib/matchMoves";

interface StartScreenProps {
  player: Color;
}

export const ChessScreen = ({ player }: StartScreenProps) => {
  let computer: Color = "black";
  let playersMoves = capablanca;
  let computersMoves = bogoljubov;
  if (player === "black") {
    computer = "white";
    playersMoves = bogoljubov;
    computersMoves = capablanca;
  }

  const [playersTurn, setPlayersTurn] = useState(player === "white");
  const turnRef = useRef(playersTurn);
  useEffect(() => {
    if (turnRef.current !== playersTurn) {
      if (playersTurn) {
        computersMoves.shift();
      } else {
        playersMoves.shift();
      }
      turnRef.current = playersTurn;
    }
  });

  const currentMove = playersTurn ? playersMoves[0] : computersMoves[0];
  return (
    <View style={styles.container}>
      {currentMove ? (
        <Chessboard
          activePlayer={playersTurn ? player : computer}
          playersView={player}
          playersTurn={playersTurn}
          setPlayersTurn={setPlayersTurn}
          currentMove={currentMove}
        />
      ) : (
        <Text>End of match</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
