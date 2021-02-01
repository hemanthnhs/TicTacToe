import "./App.css";
import { useState } from "react";
import Game from "./components/Game";
import Registration from "./components/Registration";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const App = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gridSize, setgridSize] = useState(3);
  const [gameStarted, setGameStart] = useState(false);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Tic Tac Toe</div>
      </Header>
      <Content>
        <div className="site-layout-content">
          {gameStarted ? (
            <Game player1={player1} player2={player2} gridSize={gridSize} />
          ) : (
            <Registration
              setPlayer1={setPlayer1}
              setPlayer2={setPlayer2}
              setgridSize={setgridSize}
              setGameStart={setGameStart}
            />
          )}
        </div>
      </Content>
      <Footer className="footer">
        <a href="https://hemanthnhs.github.io/">Developed by Hemanth</a>
      </Footer>
    </Layout>
  );
};

export default App;
