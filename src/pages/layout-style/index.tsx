import React from "react";
import PageLayout from "../../components/UI/PageLayout";
import { Divider, Space } from "antd";
import LayoutControl from "../../components/LayoutPage/LayoutControl";
import ShapeGroup from "../../components/LayoutPage/ShapeGroup";

const LayoutStylePage = () => {
  return (
    <PageLayout title='Layout & Style'>
      <Space
        direction='vertical'
        size='middle'
        style={{ display: "flex", width: "65%" }}
      >
        <LayoutControl />
        <Divider />
        <ShapeGroup />
      </Space>
    </PageLayout>
  );
};

export default LayoutStylePage;
