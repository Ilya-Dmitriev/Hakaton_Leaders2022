import { Outlet } from "react-router"

import classes from "./BaseLayOut.module.scss";

export const BaseLayOut: React.FC = ({
}) => {
  return (
    <div className={classes.base_layout}>
      <Outlet/>
    </div>
  )
}
