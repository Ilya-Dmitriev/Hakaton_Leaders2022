import { Button, Form, Select, Input, InputNumber, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import classes from "./Bilding.module.scss";

interface FieldData {
  name: string;
  value: any;
}

const BildingForm = ({
  fields,
  index,
}: {
  fields: FieldData[];
  index: string;
}) => {
  return (
    <Form
      className={classes.bilding_form}
      name="bilding_form"
      fields={fields}
      labelAlign="left"
      labelCol={{ span: 14 }}
      wrapperCol={{ span: 10 }}
      onFinish={() => {
        // navigate("bilding");
      }}
    >
      <Form.Item wrapperCol={{ span: 24 }}>
        <Typography.Title level={5}>Объект номер: {index}</Typography.Title>
      </Form.Item>

      <Form.Item name="floor" label="Этаж">
        <InputNumber />
      </Form.Item>

      <Form.Item name="rooms" label="Количество комнат">
        <InputNumber />
      </Form.Item>

      <Form.Item name="total_area" label="Площадь общая">
        <InputNumber />
      </Form.Item>

      <Form.Item name="living_area" label="Площадь жилая">
        <InputNumber />
      </Form.Item>

      <Form.Item name="kitchen_area" label="Площадь кухни">
        <InputNumber />
      </Form.Item>

      <Form.Item name="balcony" label="Лоджия/Балкон">
        <Input />
      </Form.Item>

      <Form.Item name="condition" label="Сострояние">
        <Select>
          <Select.Option value="none">Нет</Select.Option>
          <Select.Option value="economic">Эконом</Select.Option>
          <Select.Option value="improved">Улучшенная</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export const Bilding = ({ data }) => {
  const navigate = useNavigate();

  const fields: FieldData[] = [{ name: "condition", value: "none" }];

  return (
    <div className={classes.container}>
      <div className={classes.bildings_row}>
        <BildingForm
          fields={[
            { name: "condition", value: "none" },
            { name: "floor", value: !!data && data[0].reference.floor },
            { name: "rooms", value: !!data && data[0].reference.rooms },
            {
              name: "total_area",
              value: !!data && data[0].reference.total_area,
            },
            {
              name: "living_area",
              value: !!data && data[0].reference.living_area,
            },
            {
              name: "kitchen_area",
              value: !!data && data[0].reference.kitchen_area,
            },
            { name: "balcony", value: !!data && data[0].reference.balcony },
            { name: "condition", value: !!data && data[0].reference.condition },
          ]}
          index="1"
        />
        <BildingForm fields={fields} index="2" />
        <BildingForm fields={fields} index="3" />
        <BildingForm fields={fields} index="4" />
      </div>
      <div className={classes.btns}>
        <Button>Вернуться</Button>
        <Button type="primary">Продолжить</Button>
      </div>
    </div>
  );
};
