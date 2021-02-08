export type Color = "white" | "black";

export interface ChessPiece {
  piece: string;
  color: Color;
}

export type SquareContent = ChessPiece | undefined;

export type Piece =
  | "r1"
  | "n1"
  | "b1"
  | "q"
  | "k"
  | "b2"
  | "n2"
  | "r2"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7"
  | "p8";
export type Rank = number;
export type File = number;

export type Move = [Piece, File, Rank];
