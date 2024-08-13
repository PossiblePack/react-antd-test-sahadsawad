import React, { useEffect, useState } from "react";
import PageLayout from "../../components/UI/PageLayout";
import { Divider, Space } from "antd";
import LayoutControl from "../../components/LayoutPage/LayoutControl";
import ShapeGroup from "../../components/LayoutPage/ShapeGroup";

const shapeList = [
  "trapezoid",
  "parallelogram",
  "rectangle",
  "circle",
  "oval",
  "square",
];

const LayoutStylePage: React.FC = () => {
  const [shapeOrderList, setShapeListOrder] = useState<string[]>(shapeList);
  const [isSwitched, setIsSwitched] = useState(false);

  useEffect(() => console.log("change"), [shapeOrderList]);
  return (
    <PageLayout title='Layout & Style'>
      <Space
        direction='vertical'
        size='middle'
        style={{ display: "flex", width: "65%" }}
      >
        <LayoutControl
          isSwitched={isSwitched}
          setIsSwitched={setIsSwitched}
          shapeOrderList={shapeOrderList}
          setShapeListOrder={setShapeListOrder}
        />
        <Divider />
        <ShapeGroup
          shapeOrderList={shapeOrderList}
          isSwitched={isSwitched}
          setShapeListOrder={setShapeListOrder}
        />
      </Space>
    </PageLayout>
  );
};

export default LayoutStylePage;
