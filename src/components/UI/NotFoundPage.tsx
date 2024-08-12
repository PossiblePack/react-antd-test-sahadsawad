import Layout from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Layout
      className='app'
      style={{ width: "100vw", height: "100vh", padding: "2rem" }}
    >
      <Title>Not Found</Title>
      <Link to={"/"}>Back to homepage</Link>
    </Layout>
  );
};

export default NotFoundPage;
