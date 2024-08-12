import { Button, Col, Row, Space } from "antd";

const boxStyle: React.CSSProperties = {
  width: "100%",
  height: "fit-content",
  padding: "1rem",
  display: "flex",
};

const ShapeGroup = () => {
  return (
    <Space direction='vertical' size='middle' style={{ display: "flex" }}>
      <Row gutter={16} justify='end'>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='trapezoid'></div>
          </Button>
        </Col>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='parallelogram'></div>
          </Button>
        </Col>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='rectangle'></div>
          </Button>
        </Col>
      </Row>
      <Row gutter={16} justify='center'>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='circle'></div>
          </Button>
        </Col>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='oval'></div>
          </Button>
        </Col>
        <Col span={6}>
          <Button style={boxStyle}>
            <div className='square'></div>
          </Button>
        </Col>
      </Row>
    </Space>
  );
};

export default ShapeGroup;
