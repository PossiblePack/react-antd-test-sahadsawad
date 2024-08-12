import React, { useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout";
import { Space } from "antd";
import FormComponent from "../../components/FormPage/FormComponent";
import data from "../../api/data.json";
import TableComponent from "../../components/FormPage/TableComponent";

const FormPage = () => {
  useEffect(() => {
    const localdata = localStorage.getItem("data");
    if (!localdata) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("data", jsonData);
    }
  }, []);

  return (
    <PageLayout title='Form & Table'>
      <Space
        direction='vertical'
        size='middle'
        style={{
          display: "flex",
          justifyItems: "center",
          width: "90%",
        }}
      >
        <FormComponent />
        <TableComponent data={data} />
      </Space>
    </PageLayout>
  );
};

export default FormPage;
