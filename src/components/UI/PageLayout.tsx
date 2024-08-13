import { Layout, Select, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
const { Option } = Select;
type PageLayoutProps = {
  title?: string;
  children?: ReactNode;
};

function PageLayout({ title, children }: PageLayoutProps) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("th");
  return (
    <Layout className='app' style={{ minHeight: "100vh", width: "100vw" }}>
      <Header
        style={{
          height: "fit-content",
          backgroundColor: "transparent",
          display: "flex",
          placeItems: "center",
        }}
      >
        <Space style={{ width: "100%" }}>
          <Title level={2}>{title}</Title>
        </Space>
        <Space>
          <Select
            defaultValue='th'
            value={language}
            onChange={(value) => {
              setLanguage(value);
              i18n.changeLanguage(value);
            }}
          >
            <Option value='th'>{t("th")}</Option>
            <Option value='en'>{t("en")}</Option>
          </Select>
        </Space>
      </Header>
      <Content
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default PageLayout;
