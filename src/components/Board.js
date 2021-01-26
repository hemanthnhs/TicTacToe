import Button from "./Button";
import { Layout, Row, Col } from "antd";

const Board = ({ buttonClicked, btns, complete }) => {
  const buttons = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row[j] = (
        <Col>
          <Button
            key={i * 3 + j}
            id={i * 3 + j}
            buttonClicked={buttonClicked}
            attrs={btns.filter((b) => b.id === i * 3 + j)[0]}
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
