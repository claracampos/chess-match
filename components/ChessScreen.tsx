import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Chessboard } from "./Chessboard";
import { Color } from "./types";
import { capablanca, bogoljubov } from "../lib/matchMoves";
import { Button } from "./Button";

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
  const [rankTip, setRankTip] = useState(false);
  const [fileTip, setFileTip] = useState(false);
  const [pieceTip, setPieceTip] = useState(false);

  const turnRef = useRef(playersTurn);
  useEffect(() => {
    if (turnRef.current !== playersTurn) {
      if (playersTurn) {
        computersMoves.shift();
      } else {
        playersMoves.shift();
      }
      setRankTip(false);
      setFileTip(false);
      setPieceTip(false);
      turnRef.current = playersTurn;
    }
  });

  const currentMove = playersTurn ? playersMoves[0] : computersMoves[0];
  const endMatch = !currentMove;
  return (
    <View style={styles.container}>
      <View>
        {endMatch ? (
          <View>
            <Text style={[styles.boldTitle]}>End of Match</Text>
            <Text style={[styles.text, styles.header]}>
              Bogoljubov resigns.
            </Text>
          </View>
        ) : (
          <Text style={[styles.text, styles.header]}>Moscow, 1925</Text>
        )}
        <Chessboard
          activePlayer={playersTurn ? player : computer}
          playersView={player}
          playersTurn={playersTurn}
          setPlayersTurn={setPlayersTurn}
          currentMove={currentMove}
          fileTip={fileTip}
          rankTip={rankTip}
          pieceTip={pieceTip}
        />
        <View style={styles.helpContainer}>
          <Text style={styles.text}>Help Me:</Text>
          <Button
            title="Piece"
            onPress={() => setPieceTip(true)}
            disabled={!playersTurn || endMatch}
            dark={true}
          />
          <Button
            title="File"
            onPress={() => setFileTip(true)}
            disabled={!playersTurn || endMatch}
            dark={true}
          />
          <Button
            title="Rank"
            onPress={() => setRankTip(true)}
            disabled={!playersTurn || endMatch}
            dark={true}
          />
        </View>
      </View>
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
  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-around",
  },
  text: {
    fontWeight: "300",
    fontSize: 20,
  },
  boldTitle: { fontWeight: "700", textAlign: "center", fontSize: 28 },
  header: { textAlign: "center", marginBottom: 16, fontSize: 24 },
});
