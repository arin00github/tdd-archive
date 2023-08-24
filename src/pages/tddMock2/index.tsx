import { Card, Descriptions, Divider, Layout } from "antd";

import { BookList } from "../../components/tddMock2/BookList";
import { CodeDescription } from "./CodeDescription";

const TDDMockPage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>Concept of TDD</h2>
        <div>
          <Descriptions>
            <Descriptions.Item label="topic">
              mocking 하지 않아도 되는 외부 라이브러리 예시
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider />
        <Content style={{ display: "flex" }}>
          <Card style={{ width: "40%", flex: "none" }}>
            <BookList />
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

export default TDDMockPage;
