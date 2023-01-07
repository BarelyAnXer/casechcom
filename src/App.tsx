import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import React from "react";
import Login from "./pages/Login/Login";
import Attendance from "./pages/Attendance";
import Grades from "./pages/Grades";
import FAQ from "./pages/FAQ/FAQ";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<p>home</p>}
        />

        <Route
          path="/login"
          element={<Login/>}
        />
      </Routes>

      <Layout>
        <Routes>
          <Route
            path="/attendance"
            element={<Attendance/>}
          />
          <Route
            path="/grades"
            element={<Grades/>}
          />
          <Route
            path="/faq"
            element={<FAQ/>}
          />
        </Routes>
      </Layout>
    </>

  );
}
