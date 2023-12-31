import { Card, Descriptions, Divider, Layout } from "antd";
import { UserForm } from "../../components/tddModule/UserForm";
import { CodeDescription } from "./CodeDescription";

const TDDModulePage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>Concept of TDD</h2>
        <div>
          <Descriptions>
            <Descriptions.Item label="topic">
              테스트 코드 재사용 방법
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider />
        <Content style={{ display: "flex" }}>
          <Card style={{ width: "40%", flex: "none" }}>
            <UserForm />
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

export default TDDModulePage;
