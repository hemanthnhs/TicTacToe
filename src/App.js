import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import { Layout, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

const App = () => {
  let btns = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      btns.push({ id: i * 3 + j, player: null });
    }
  }
  const [buttons, setButtons] = useState(btns);
  const [currentPlayer, setPlayerTurn] = useState(1);
  const buttonClicked = (id) => {
    setButtons(
      buttons.map((b) => (b.id === id ? { ...b, player: currentPlayer } : b))
    );
    setPlayerTurn(currentPlayer == 1 ? 2 : 1);
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Tic Tac Toe</div>
      </Header>
      <Row className="player-status">
        <Col className="player-name" span={12}>
          Player 1
        </Col>
        <Col className="player-name player-2" span={12}>
          Player 2
        </Col>
      </Row>
      <Content>
        <div className="site-layout-content">
          <Board buttonClicked={buttonClicked} btns={buttons} />
        </div>
      </Content>
      <Footer className="footer">
        <a href="https://hemanthnhs.github.io/">Developed by Hemanth</a>
      </Footer>
    </Layout>
  );
};

export default App;
