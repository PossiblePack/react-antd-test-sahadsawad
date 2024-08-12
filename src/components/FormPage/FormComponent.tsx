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
import type { Dayjs } from "dayjs";
const { Option } = Select;

const FormComponent = () => {
  const onSetBirthday: DatePickerProps<Dayjs[]>["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date, dateString);
  };

  const onReset = () => {};
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form
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
        <Col span={4}>
          <Form.Item name='title' label='Title' rules={[{ required: true }]}>
            <Select placeholder='Title'>
              <Option value='Mr.'>Mr.</Option>
              <Option value='Mrs.'>Mrs.</Option>
              <Option value='Ms.'>Ms.</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name='FirstName'
            label='firstName'
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name='lastName'
            label='LastName'
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item
            label='Birthday'
            name='birthday'
            rules={[{ required: true }]}
          >
            <DatePicker onChange={onSetBirthday} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name='nationality'
            label='Nationality'
            rules={[{ required: true }]}
          >
            <Select placeholder='please select'>
              <Option value='Thai'>Thai</Option>
              <Option value='French'>French</Option>
              <Option value='American'>American</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Col span={12}>
        <Form.Item label='CitizenID'>
          <Input maxLength={13} />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item name='gender' label='Gender' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='male'>Male</Radio>
            <Radio value='female'>Female</Radio>
            <Radio value='unsex'>Unsex</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item
          name='mobilePhone'
          label='Mobile Phone'
          rules={[{ required: true }]}
        >
          <Input type='number' maxLength={10} />
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item name='passportNumber' label='Passport No'>
          <Input />
        </Form.Item>
      </Col>
      <Row>
        <Col span={10}>
          <Form.Item
            name='expectSalary'
            label='Expected Salary'
            rules={[{ required: true }]}
          >
            <InputNumber<number>
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              onChange={() => {}}
            />
          </Form.Item>
        </Col>
        <Col span={4}></Col>
        <Col span={6}>
          <Button htmlType='button' onClick={onReset}>
            RESET
          </Button>
        </Col>
        <Col span={4}>
          <Button htmlType='submit'>SUBMIT</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
