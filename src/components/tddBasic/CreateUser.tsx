import { Form, Input, Button } from "antd";

interface CreatUserProps {
  options: { label: string; value: string }[];
}

export const initialOptions: { label: string; value: string }[] = [
  { label: "TMS개발", value: "TMS-group" },
  { label: "VMS개발", value: "VMS-group" },
  { label: "혁신개발", value: "innovation-development" },
];

export const CreateUser = ({ options = initialOptions }: CreatUserProps) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log("finish", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("errorInfo", errorInfo);
  };
  return (
    <Form
      form={form}
      name="register-employee"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input your name" }]}
      >
        <input data-testid="creatuser-input-name" />
      </Form.Item>
      <Form.Item name="group" label="Group" rules={[{ required: true }]}>
        <select placeholder="부서 선택" data-testid="create-select-group">
          <option value={undefined}>선택 안함</option>
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary" data-testid="submit-btn">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset} data-testid="reset-btn">
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
