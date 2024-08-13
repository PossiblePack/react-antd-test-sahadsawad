import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";
import { resetData, setData } from "../../redux/form";
import React, { useEffect } from "react";
const { Option } = Select;

type FormComponentProps = {
  setTableData: Function;
  form: any;
};

const FormComponent: React.FC<FormComponentProps> = ({
  setTableData,
  form,
}) => {
  const { t } = useTranslation();
  const formData = useSelector((state: RootState) => state.formData);
  const dispatch = useDispatch();

  const onReset = () => {
    form.resetFields();
    dispatch(resetData());
  };
  const onFinish = () => {
    const localdata = localStorage.getItem("data");
    if (!localdata) {
      const arrayData = [];
      arrayData.push({ ...formData, id: 1 });
      const jsonData = JSON.stringify(arrayData);
      localStorage.setItem("data", jsonData);
      alert("create success");
    } else {
      const data = JSON.parse(localdata); //create
      if (!formData.id) {
        data.push({ ...formData, id: data.length + 1 });
        const jsonData = JSON.stringify(data);
        localStorage.setItem("data", jsonData);
        alert("create success");
      } else {
        const index = data.findIndex((item: any) => item.id === formData.id);
        if (index !== -1) {
          data[index] = formData; // Replace the old data with the new data
          const jsonData = JSON.stringify(data);
          localStorage.setItem("data", jsonData);
        }
        alert("edit succes"); //edit
      }
    }
    form.resetFields();
    dispatch(resetData());
  };
  const onChangeBirthday: DatePickerProps["onChange"] = (_, dateString) => {
    dispatch(setData({ birthday: dateString }));
  };

  useEffect(() => {
    setTableData(JSON.parse(localStorage.getItem("data")!));
  }, [formData, setTableData]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout='inline'
      style={{
        display: "grid",
        marginInline: "15vw",
        padding: "1rem",
        height: "fit-content",
        border: "black",
        borderStyle: "solid",
        borderRadius: "1rem",
        gap: "0.5rem",
      }}
    >
      <Row>
        <Col span={6}>
          <Form.Item
            name='title'
            label={t("title")}
            rules={[{ required: true }]}
          >
            <Select
              placeholder={t("title")}
              onSelect={(value) => dispatch(setData({ title: value }))}
            >
              <Option value='mr.'>{t("mr")}</Option>
              <Option value='mrs.'>{t("mrs")}</Option>
              <Option value='ms.'>{t("ms")}</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name='firstName'
            label={t("firstName")}
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => dispatch(setData({ firstName: e.target.value }))}
            />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name='lastName'
            label={t("lastName")}
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => dispatch(setData({ lastName: e.target.value }))}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item
            label={t("birthday")}
            name='birthday'
            rules={[{ required: true }]}
          >
            <DatePicker
              placeholder={t("birthdatePlaceholder")}
              format={"MM/DD/YYYY"}
              onChange={onChangeBirthday}
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name='nationality'
            label={t("nationality")}
            rules={[{ required: true }]}
          >
            <Select
              placeholder={t("nationalityPlaceholder")}
              onSelect={(value) => dispatch(setData({ nationality: value }))}
            >
              <Option value='thai'>{t("thai")}</Option>
              <Option value='frence'>{t("frence")}</Option>
              <Option value='american'>{t("american")}</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Col span={12}>
        <Form.Item name='citizenId' label={t("citizenId")}>
          <Input
            maxLength={13}
            onChange={(e) => dispatch(setData({ citizenId: e.target.value }))}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item
          name='gender'
          label={t("gender")}
          rules={[{ required: true }]}
        >
          <Radio.Group
            onChange={(e) => dispatch(setData({ gender: e.target.value }))}
          >
            <Radio value='male'>{t("male")}</Radio>
            <Radio value='female'>{t("female")}</Radio>
            <Radio value='unsex'>{t("unsex")}</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col span={15}>
        <Form.Item
          name='mobilePhone'
          label={t("mobilePhone")}
          rules={[{ required: true }]}
        >
          <Input
            type='number'
            maxLength={10}
            onChange={(e) => dispatch(setData({ mobilePhone: e.target.value }))}
          />
        </Form.Item>
      </Col>
      <Col span={15}>
        <Form.Item name='passportNumber' label={t("passportNumber")}>
          <Input
            // value={formData.passportNumber}
            onChange={(e) =>
              dispatch(setData({ passportNumber: e.target.value }))
            }
          />
        </Form.Item>
      </Col>
      <Row>
        <Col span={12}>
          <Form.Item
            name='expectSalary'
            label={t("expectSalary")}
            rules={[{ required: true }]}
          >
            <InputNumber<number>
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              onChange={(value) => dispatch(setData({ expectSalary: value }))}
            />
          </Form.Item>
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Button htmlType='button' onClick={onReset}>
            {t("reset")}
          </Button>
        </Col>
        <Col span={4}>
          <Button htmlType='submit'>{t("submit")}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
