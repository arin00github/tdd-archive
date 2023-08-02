import { Layout } from "antd";

const HomePage = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ padding: "0 32px", marginTop: "30px" }}>
        <h2>HomePage</h2>
      </Content>
    </Layout>
  );
};

export default HomePage;
