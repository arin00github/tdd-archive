import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

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
  getItem("TDD Basic", "sub1", <div></div>, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("TDD API", "sub2", <div></div>, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  { type: "divider" },

  getItem("Navigation Three", "sub4", <div></div>, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
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
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  return (
    <Layout>
      <Header>currentMenu</Header>
      <Content>
        <Layout>
          <Sider>
            <Menu onClick={onClick} items={items} />
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
