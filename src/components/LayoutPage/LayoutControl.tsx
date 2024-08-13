import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { rotateShapeLeft, rotateShapeRight } from "../../utils/utillity";

type LayoutControlProps = {
  shapeOrderList: string[];
  isSwitched: boolean;
  setIsSwitched: (data: boolean) => void;
  setShapeListOrder: (data: string[]) => void;
};
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

const LayoutControl: React.FC<LayoutControlProps> = ({
  isSwitched,
  setIsSwitched,
  shapeOrderList,
  setShapeListOrder,
}) => {
  const { t } = useTranslation();
  const onRotateRight = () => {
    setShapeListOrder(rotateShapeRight([...shapeOrderList]));
  };

  const onRotateLeft = () => {
    setShapeListOrder(rotateShapeLeft([...shapeOrderList]));
  };

  const switchOrder = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Button
          style={boxStyle}
          className='action-button'
          icon={<div className='arrow-left'></div>}
          onClick={onRotateLeft}
        >
          <Typography style={buttonLabelStyle}>{t("moveShape")}</Typography>
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
          onClick={switchOrder}
        >
          <Typography style={buttonLabelStyle}>{t("movePosition")}</Typography>
        </Button>
      </Col>
      <Col span={6}>
        <Button
          style={boxStyle}
          icon={<div className='arrow-right' onClick={onRotateRight}></div>}
        >
          <Typography style={buttonLabelStyle}>{t("moveShape")}</Typography>
        </Button>
      </Col>
    </Row>
  );
};

export default LayoutControl;
