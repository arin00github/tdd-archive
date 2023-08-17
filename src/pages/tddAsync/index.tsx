import { Card, Descriptions, Divider, Layout } from "antd";

import { CodeDescription } from "./CodeDescription";
import { Sample1 } from "../../components/tddBasic/Sample1";

const TDDAsyncPage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>Concept of TDD</h2>
        <div>
          <Descriptions>
            <Descriptions.Item label="topic">
              비동기 사용방법 가이드
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider />
        <Content style={{ display: "flex" }}>
          <Card style={{ width: "40%", flex: "none" }}>
            <Sample1 />
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

export default TDDAsyncPage;
