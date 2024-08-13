import React, { useEffect, useState } from "react";
import PageLayout from "../../components/UI/PageLayout";
import { Form, Space } from "antd";
import FormComponent from "../../components/FormPage/FormComponent";
import TableComponent from "../../components/FormPage/TableComponent";

const FormPage: React.FC = () => {
  const [form] = Form.useForm();
  const localdata = localStorage.getItem("data");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!localdata) {
      setData([]);
    } else {
      setData(JSON.parse(localdata!));
    }
  }, [localdata]);

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
        <FormComponent form={form} setTableData={setData} />
        <TableComponent data={data} setTableData={setData} form={form} />
      </Space>
    </PageLayout>
  );
};

export default FormPage;
