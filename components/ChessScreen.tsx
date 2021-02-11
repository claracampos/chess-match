import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
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
  return (
    <View style={styles.container}>
      {currentMove ? (
        <View>
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
          <View>
            <Text>Tip:</Text>
            <Button
              title="Piece"
              onPress={() => setPieceTip(true)}
              disabled={!playersTurn}
            />
            <Button
              title="File"
              onPress={() => setFileTip(true)}
              disabled={!playersTurn}
            />
            <Button
              title="Rank"
              onPress={() => setRankTip(true)}
              disabled={!playersTurn}
            />
          </View>
        </View>
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
