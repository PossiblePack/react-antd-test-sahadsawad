import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages";
import FormPage from "./pages/form";
import LayoutStylePage from "./pages/layout-style";
import NotFoundPage from "./components/UI/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFoundPage />}>
      <Route path='/' element={<Homepage />} />
      <Route path='form' element={<FormPage />} />
      <Route path='layout' element={<LayoutStylePage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: "#ffa200",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
