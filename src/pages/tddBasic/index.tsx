import { useEffect, useState } from "react";
import { Card, Descriptions, Divider, Layout } from "antd";
import { CreateUser } from "../../components/tddBasic";
import axios from "axios";
import { GET_OPTIONS_URL, makeTestUrl } from "../../services/api/constant";
import { CodeDescription } from "./CodeDescription";

const TDDBasicPage = () => {
  const { Content } = Layout;

  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  const getOptions = async () => {
    const results = await axios.get(makeTestUrl(GET_OPTIONS_URL));
    setOptions(results.data);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>Concept of TDD</h2>
        <div>
          <Descriptions>
            <Descriptions.Item label="topic">
              expect 함수 사용방법 가이드
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider />
        <Content style={{ display: "flex" }}>
          <Card style={{ width: "40%", flex: "none" }}>
            <CreateUser options={options} />
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

export default TDDBasicPage;
