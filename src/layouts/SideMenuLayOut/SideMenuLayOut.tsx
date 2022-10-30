import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Layout, Popover, Typography } from "antd";
import {
  CalculatorOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.min.css";
import classes from "./SideMenuLayOut.module.scss";

const { Title } = Typography;

export const SideMenuLayOut: React.FC = () => {
  return (
    <Layout className={classes.layout}>
      <div className={classes.side_menu}>
        <Title level={5} className={classes.title}>
          SREDA
        </Title>

        <Popover placement="right" content={"Рынок"}>
          <Link to="/" className={classes.link}>
            <HomeOutlined className={classes.icon} />
          </Link>
        </Popover>

        <Popover placement="right" content={"Оценка"}>
          <Link to="/" className={classes.link}>
            <CalculatorOutlined className={classes.icon} />
          </Link>
        </Popover>

        <Popover placement="right" content={"Настройки"}>
          <Link to="/" className={classes.link}>
            <SettingOutlined className={classes.icon} />
          </Link>
        </Popover>
      </div>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
};
