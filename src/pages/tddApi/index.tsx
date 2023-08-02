import { Card, Descriptions, Divider, Layout } from "antd";
import { CodeDescription } from "./CodeDescription";

const TDDApiPage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>Mocking Service Worker</h2>
        <div>
          <Descriptions>
            <Descriptions.Item label="topic">
              msw 사용방법 가이드 (axios)
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider />
        <Content style={{ display: "flex" }}>
          <Card style={{ width: "40%", flex: "none" }}>
            {/* <CreateUser options={options} /> */}
          </Card>
          <Card
            style={{
              width: "56%",
              padding: "16px",
              flex: "none",
            }}
          >
            <Content style={{ height: "540px", overflowY: "scroll" }}>
              <CodeDescription />
            </Content>
          </Card>
        </Content>
      </Content>
    </Layout>
  );
};

export default TDDApiPage;
