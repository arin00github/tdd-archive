import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import { HomeOutlined, StarOutlined } from "@ant-design/icons";

type RouteTyep = {
  url: string;
  title: string;
  id: string;
};

export const constMenu: RouteTyep[] = [
  {
    url: "/mutation-example-1",
    title: "How to write TDD with useMutation",
    id: "mutation-example-1",
  },
  { url: "/tdd-comcept-2", title: "Concept of TDD", id: "tdd-comcept-2" },
  {
    url: "/tdd-api-msw-3",
    title: "How to write TDD with API",
    id: "tdd-api-msw-3",
  },
];

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Home", "sub0", <HomeOutlined />),
  getItem("TDD Basic", "sub1", <StarOutlined />, [
    getItem("Expect()", "/tdd-comcept-1"),
  ]),
  getItem("TDD API", "sub2", <StarOutlined />, [
    getItem("MSW", "/tdd-api-1"),
    getItem("React Query", "/tdd-api-2"),
    getItem("React Query 2", "/tdd-api-3"),
  ]),

  { type: "divider" },

  getItem("Mock", "sub3", <StarOutlined />, [
    getItem("Mocking", "/tdd-mock-1"),
    getItem("Option 10", "10"),
  ]),

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const RootLayout = () => {
  const { Content, Header, Sider } = Layout;
  const navigator = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigator(e.key);
  };

  return (
    <Layout>
      <Header style={{ height: 40 }}>currentMenu</Header>
      <Content>
        <Layout>
          <Sider style={{ height: "calc(100vh - 40px)" }}>
            <Menu
              style={{ height: "100%" }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onClick={onClick}
              items={items}
            />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default RootLayout;
