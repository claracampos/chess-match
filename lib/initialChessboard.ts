import { Color, SquareContent, ChessPiece, Piece } from "../components/types";

const getRank = (type: "pawn" | "initial" | "empty", color?: Color) => {
  const pawnRank: Piece[] = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];
  const initialRank: Piece[] = ["r1", "n1", "b1", "q", "k", "b2", "n2", "r2"];
  const emptyRank: SquareContent[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
  if (type === "pawn" && color) {
    return addColor(pawnRank, color);
  }
  if (type === "initial" && color) {
    return addColor(initialRank, color);
  }
  return emptyRank;
};

const addColor = (rankPieces: Piece[], color: Color) => {
  const rank: SquareContent[] = rankPieces.map(
    (piece): ChessPiece => ({ color, piece })
  );
  return rank;
};

export const initialChessboard = [
  getRank("initial", "white"),
  getRank("pawn", "white"),
  getRank("empty"),
  getRank("empty"),
  getRank("empty"),
  getRank("empty"),
  getRank("pawn", "black"),
  getRank("initial", "black"),
];
