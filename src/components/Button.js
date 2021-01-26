import { Button as Btn } from "antd";

const Button = ({ buttonClicked, id, player }) => {
  return (
    <>
      <Btn
        className={`button button-player-${player ? player : ""}`}
        onClick={() => buttonClicked(id)}
        disabled={player ? true : false}
      >
        {" "}
      </Btn>
    </>
  );
};
export default Button;
