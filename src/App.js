import "./App.css";
import { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import { Layout, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

const App = () => {
  let n = 3;
  let btns = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      btns.push({ id: i * n + j, player: null, winningTile: false });
    }
  }
  const [buttons, setButtons] = useState(btns);
  const [currentPlayer, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    <Layout className="layout">
      <Header>
        <div className="logo">Tic Tac Toe</div>
      </Header>
      <Row className="player-status">
        <Col
          className={`player-name player-1 ${
            currentPlayer === 1 ? "player-active" : "player-inactive"
          }`}
          span={12}
        >
          {currentPlayer === 1 ? <CaretRightOutlined /> : " "}
          Player 1
        </Col>
        <Col
          className={`player-name player-2 ${
            currentPlayer === 2 ? "player-active" : "player-inactive"
          }`}
          span={12}
        >
          {currentPlayer === 2 ? <CaretRightOutlined /> : " "}
          Player 2
        </Col>
      </Row>
      <Content>
        <div className="site-layout-content">
          <Board
            buttonClicked={buttonClicked}
            btns={buttons}
            complete={winner != null}
          />
          <GameStatus currentPlayer={currentPlayer} winner={winner} />
        </div>
      </Content>
      <Footer className="footer">
        <a href="https://hemanthnhs.github.io/">Developed by Hemanth</a>
      </Footer>
    </Layout>
  );
};

export default App;
