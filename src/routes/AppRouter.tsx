import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/home/Home";
import { Layout } from "../components/layout/Layout";
import { Contact } from "../pages/contact/Contact";
import { ShowCategory } from "../pages/showCategory/ShowCategory";

export const AppRouter: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/category/:id" element={<ShowCategory />}></Route>
        </Routes>
      </Layout>
    </>
  );
};
