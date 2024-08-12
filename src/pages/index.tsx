import React from "react";
import PageLayout from "../components/UI/PageLayout";
import { Button, Card, Space } from "antd";
import Title from "antd/es/typography/Title";

const Homepage = () => {
  const testsInfo = [
    { title: "Layout & Style", link: "layout" },
    { title: "Form & Table", link: "form" },
  ];
  return (
    <PageLayout>
      <Space>
        {testsInfo.map((test, idx) => {
          return (
            <Button
              type='link'
              onClick={() => (window.location.href = `/${test.link}`)}
            >
              <Card
                title={"Test " + (idx + 1)}
                key={test.title}
                bordered={false}
                style={{ width: 300 }}
              >
                <Title level={5}>{test.title}</Title>
              </Card>
            </Button>
          );
        })}
      </Space>
    </PageLayout>
  );
};

export default Homepage;
