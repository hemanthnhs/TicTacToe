import { Button as Btn } from "antd";

const Button = ({ buttonClicked, id, attrs, complete }) => {
  const player = attrs.player;
  const winningTile = attrs.winningTile;
  return (
    <>
      <Btn
        className={`button button-player-${player ? player : ""} ${
          winningTile ? "winning-btn" : ""
        }`}
        onClick={() => buttonClicked(id)}
        disabled={player || complete ? true : false}
      >
        {" "}
      </Btn>
    </>
  );
};
export default Button;
