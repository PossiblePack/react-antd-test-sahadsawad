/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Checkbox,
  Col,
  Row,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import React from "react";

type TableData = {
  title: string;
  FirstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  gender: string;
  mobilePhone: string;
  expectSalary: number;
};

type TableComponentProps = {
  data: any;
};

const columns: TableColumnsType<TableData> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (text, record) => (
      <>
        {record.FirstName} {record.lastName}
      </>
    ),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: true,
  },
  {
    title: "Mobile Phone",
    dataIndex: "mobilePhone",
    sorter: true,
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
    sorter: true,
  },
  {
    title: "MANAGE",
    dataIndex: "",
    key: "x",
    render: () => (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <a>Edit</a>
        <a>Delete</a>
      </div>
    ),
  },
];

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  // const [isSelectAll, setIsSelectAll] = useState([]);
  const selectAll = () => {
    // setIsSelectAll(!isSelectAll);
  };

  // rowSelection object indicates the need for row selection
  // const rowSelection = {
  //   onChange: (selectedRowKeys: React.Key[], selectedRows: TableData[]) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //   },
  // };
  const deleteAll = () => {};
  return (
    <Space
      direction='vertical'
      size='middle'
      style={{
        display: "flex",
        justifyItems: "center",
        width: "90%",
      }}
    >
      <Row align='middle'>
        <Col>
          <Checkbox onChange={selectAll}>Select All</Checkbox>
        </Col>
        <Col>
          <Button onChange={deleteAll}>DELETE</Button>
        </Col>
      </Row>
      <Table
        style={{ width: "100%" }}
        // rowSelection={{
        //   type: "checkbox",
        //   ...rowSelection,
        // }}
        columns={columns}
        dataSource={data}
        pagination={{
          position: ["topRight"],
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    </Space>
  );
};

export default TableComponent;
