import Button from "./Button";
import { Layout, Row, Col } from "antd";

const Board = ({ buttonClicked, btns, complete, gridSize }) => {
  const buttons = [];
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      row[j] = (
        <Col>
          <Button
            key={i * gridSize + j}
            id={i * gridSize + j}
            buttonClicked={buttonClicked}
            attrs={btns.filter((b) => b.id === i * gridSize + j)[0]}
            complete={complete}
          />
        </Col>
      );
    }
    buttons[i] = (
      <Row gutter={[10, 10]} justify="center">
        {row}
      </Row>
    );
  }
  return <div>{buttons}</div>;
};

export default Board;
