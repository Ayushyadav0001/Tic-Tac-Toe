import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

const UseTictactoe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [Next, setNext] = useState(true);
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = Next ? "X" : "O";
    setBoard(newBoard);
    setNext(!Next);
  };

  const statusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return <span style={{ color: "red" }}>Winner:{winner}</span>;
    } else if (board.every((cell) => cell !== null)) {
      return <span>It's a draw!</span>;
    } else {
      return <span>Player's turn: {Next ? "X" : "O"}</span>;
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setNext(true);
  };

  return { board, handleClick, calculateWinner, statusMessage, resetGame };
};

export default UseTictactoe;
