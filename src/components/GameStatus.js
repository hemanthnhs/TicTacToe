import { Button } from "antd";
import { SmileTwoTone } from "@ant-design/icons";

const GameStatus = ({ currentPlayer, winner }) => {
  let status_message = [];
  if (winner === null) {
    status_message.push(`Player ${currentPlayer}'s Turn`);
  } else {
    status_message.push(`Player ${winner} Won `);
    status_message.push(<SmileTwoTone />);
    status_message.push(" ");
    status_message.push(<SmileTwoTone />);
    status_message.push(` !!!`);
  }
  return (
    <div>
      <div className="align-center">{status_message}</div>
      <div className="align-center">
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default GameStatus;
