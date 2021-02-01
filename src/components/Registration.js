import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Registration = ({
  setPlayer1,
  setPlayer2,
  setgridSize,
  setGameStart,
}) => {
  const onFinish = ({ player1, player2, grid }) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setgridSize(parseInt(grid));
    setGameStart(true);
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Player 1 Name: "
          name="player1"
          rules={[
            { required: true, message: "Please input your player1's name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Player 2 Name: "
          name="player2"
          rules={[
            { required: true, message: "Please input your player2's name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Grid Size(n x n): "
          name="grid"
          rules={[{ required: true, message: "Please enter grid size!" }]}
        >
          <Input min={3} max={10} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
