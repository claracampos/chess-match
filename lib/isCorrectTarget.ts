import { File, Move, Rank } from "../components/types";

export const isCorrectTarget = (file: File, rank: Rank, move?: Move) => {
  return move && file === move[1] && rank === move[2];
};
