import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";

const boxStyle: React.CSSProperties = {
  width: "100%",
  height: "fit-content",
  padding: "1rem",
  display: "flex",
  backgroundColor: "white",
};

const buttonLabelStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "-12px",
  paddingInline: "0.5rem",
  backgroundColor: "#6eda78",
  borderRadius: "0.25rem",
  color: "white",
};

const LayoutControl = () => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Button
          style={boxStyle}
          className='action-button'
          icon={<div className='arrow-left'></div>}
        >
          <Typography style={buttonLabelStyle}>Move shape</Typography>
        </Button>
      </Col>
      <Col span={12}>
        <Button
          style={boxStyle}
          className='action-button'
          icon={
            <Space style={{ gap: "10rem" }}>
              <div className='arrow-up'></div>
              <div className='arrow-down'></div>
            </Space>
          }
        >
          <Typography style={buttonLabelStyle}>Move position</Typography>
        </Button>
      </Col>
      <Col span={6}>
        <Button style={boxStyle} icon={<div className='arrow-right'></div>}>
          <Typography style={buttonLabelStyle}>Move shape</Typography>
        </Button>
      </Col>
    </Row>
  );
};

export default LayoutControl;
