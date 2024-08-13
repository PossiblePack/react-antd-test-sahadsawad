import { Button, Col, Row, Space } from "antd";
import { randomShapeOrder } from "../../utils/utillity";

type ShapeGroupProps = {
  shapeOrderList: string[];
  isSwitched: boolean;
  setShapeListOrder: (data: string[]) => void;
};

const boxStyle: React.CSSProperties = {
  width: "100%",
  height: "fit-content",
  padding: "1rem",
  display: "flex",
};

const ShapeGroup: React.FC<ShapeGroupProps> = ({
  shapeOrderList,
  isSwitched,
  setShapeListOrder,
}) => {
  const onShuffle = () => {
    setShapeListOrder(randomShapeOrder(shapeOrderList));
  };

  const orderedList = isSwitched
    ? [...shapeOrderList.slice(3, 6), ...shapeOrderList.slice(0, 3)]
    : shapeOrderList;
  return (
    <Space direction='vertical' size='middle' style={{ display: "flex" }}>
      <Row gutter={16} justify={isSwitched ? "center" : "end"}>
        {orderedList.slice(0, 3).map((shape, index) => (
          <Col span={6} key={index}>
            <Button style={boxStyle} onClick={onShuffle}>
              <div className={shape}></div>
            </Button>
          </Col>
        ))}
      </Row>
      <Row gutter={16} justify={isSwitched ? "end" : "center"}>
        {orderedList.slice(3, 6).map((shape, index) => (
          <Col span={6} key={index}>
            <Button style={boxStyle} onClick={onShuffle}>
              <div className={shape}></div>
            </Button>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default ShapeGroup;
