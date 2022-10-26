import { RegistrationForm } from "components";
import { Typography } from "antd";

const { Title } = Typography;
import classes from "./Registration.module.scss";

export const Registration = () => {
  return (
    <div className={classes.registration_container}>
      <div className={classes.registration_form}>
        <Title level={3} className={classes.title}>
          Регистрация пользователя
        </Title>
        <RegistrationForm />
      </div>
    </div>
  );
};
