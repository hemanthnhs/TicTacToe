import { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import Board from "./Board";
import GameStatus from "./GameStatus";
import { Row, Col } from "antd";

const Game = ({ player1, player2, gridSize }) => {
  let n = gridSize;
  let btns = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      btns.push({ id: i * n + j, player: null, winningTile: false });
    }
  }
  const [buttons, setButtons] = useState(btns);
  const [currentPlayer, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const buttonClicked = (id) => {
    if (!checkCompletion(id, currentPlayer)) {
      setButtons(
        buttons.map((b) => (b.id === id ? { ...b, player: currentPlayer } : b))
      );
      setPlayerTurn(currentPlayer === 1 ? 2 : 1);
    }
  };
  const setWinningButtons = (wonButtons, id, currentPlayer) => {
    setButtons(
      buttons.map((b) =>
        wonButtons.includes(b.id)
          ? { ...b, winningTile: true, player: currentPlayer }
          : b
      )
    );
    setWinner(currentPlayer);
  };
  const checkCompletion = (id, currentPlayer) => {
    let matchedButtons = [id];
    //check horizontally
    let start = Math.floor(id / n) * n;
    let end = start + (n - 1);
    for (let i = start; i <= end; i++) {
      if (buttons[i].player === currentPlayer) {
        matchedButtons.push(i);
      }
    }
    if (matchedButtons.length >= n) {
      setWinningButtons(matchedButtons, id, currentPlayer);
      return true;
    }
    //check vertically
    matchedButtons = [id];
    start = id % n;
    for (let i = start; i < btns.length; i = i + n) {
      if (buttons[i].player === currentPlayer) {
        matchedButtons.push(i);
      }
    }
    if (matchedButtons.length >= n) {
      setWinningButtons(matchedButtons, id, currentPlayer);
      return true;
    }
    //check diagonal top left to right bottom
    if (Math.floor(id / n) === id % n) {
      //lies in diagonal
      matchedButtons = [id];
      for (let i = 0; i < n; i++) {
        if (buttons[i * n + i].player === currentPlayer) {
          matchedButtons.push(i * n + i);
        }
      }
      if (matchedButtons.length >= n) {
        setWinningButtons(matchedButtons, id, currentPlayer);
        return true;
      }
    }
    //check diagonal top right to left bottom
    if (n - Math.floor(id / n) - 1 === id % n) {
      //lies in diagonal
      matchedButtons = [id];
      for (let i = 0; i < n; i++) {
        if (buttons[i * n + n - 1 - i].player === currentPlayer) {
          matchedButtons.push(i * n + n - 1 - i);
        }
      }
      if (matchedButtons.length >= n) {
        setWinningButtons(matchedButtons, id, currentPlayer);
        return true;
      }
    }
    return false;
  };
  return (
    <>
      <Row className="player-status">
        <Col
          className={`player-name player-1 ${
            currentPlayer === 1 ? "player-active" : "player-inactive"
          }`}
          span={12}
        >
          {currentPlayer === 1 ? <CaretRightOutlined /> : " "}
          {player1}
        </Col>
        <Col
          className={`player-name player-2 ${
            currentPlayer === 2 ? "player-active" : "player-inactive"
          }`}
          span={12}
        >
          {currentPlayer === 2 ? <CaretRightOutlined /> : " "}
          {player2}
        </Col>
      </Row>
      <Board
        buttonClicked={buttonClicked}
        btns={buttons}
        complete={winner != null}
        gridSize={gridSize}
      />
      <GameStatus
        player1={player1}
        player2={player2}
        currentPlayer={currentPlayer}
        winner={winner}
      />
    </>
  );
};

export default Game;
