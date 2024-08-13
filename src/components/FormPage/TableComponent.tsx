/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, Space, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TableData } from "../../types/form";
import { setData } from "../../redux/form";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

type TableComponentProps = {
  data: TableData[];
  setTableData: Function;
  form: any;
};

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  setTableData,
  form,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const deleteRow = (id: number) => {
    const localdata = localStorage.getItem("data");
    const deletedData: TableData[] = JSON.parse(localdata!).filter(
      (item: TableData) => item.id !== id
    );
    localStorage.setItem("data", JSON.stringify(deletedData));
    setTableData(deletedData);
    alert("Delete Success");
  };
  const columns: TableColumnsType<TableData> = [
    {
      title: t("name"),
      dataIndex: "name",
      sorter: (record1, record2) => {
        return (record1.firstName + record1.lastName).localeCompare(
          record2.firstName + record2.lastName
        );
      },
      render: (_, record) => (
        <>
          {record.firstName} {record.lastName}
        </>
      ),
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      sorter: (record1, record2) => {
        return record1.gender.localeCompare(record2.gender);
      },
      render: (_, record) => {
        switch (record.gender) {
          case "male":
            return <>{t("male")}</>;
          case "female":
            return <>{t("female")}</>;
          case "unsex":
            return <>{t("unsex")}</>;
        }
      },
    },
    {
      title: t("mobilePhone"),
      dataIndex: "mobilePhone",
      sorter: (record1, record2) => {
        return record1.mobilePhone.localeCompare(record2.mobilePhone);
      },
    },
    {
      title: t("nationality"),
      dataIndex: "nationality",
      sorter: (record1, record2) => {
        return record1.nationality.localeCompare(record2.nationality);
      },
      render: (_, record) => {
        switch (record.nationality) {
          case "thai":
            return <>{t("thai")}</>;
          case "frence":
            return <>{t("frence")}</>;
          case "american":
            return <>{t("american")}</>;
        }
      },
    },
    {
      title: t("manage"),
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a
            onClick={() => {
              dispatch(setData({ ...record }));
              const { birthday, ...rest } = record;
              form.setFieldsValue({ ...rest, birthday: dayjs(birthday) });
            }}
          >
            {t("edit")}
          </a>
          <a onClick={() => deleteRow(record.id!)}>{t("delete")}</a>
        </div>
      ),
    },
  ];
  return (
    <Space
      direction='vertical'
      size='middle'
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyItems: "center",
      }}
    >
      <Table
        rowKey={(record) => record.id!}
        columns={columns}
        dataSource={data}
        pagination={{
          position: ["topRight"],
          defaultPageSize: 10,
        }}
      />
    </Space>
  );
};

export default TableComponent;
