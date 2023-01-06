import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import React from "react";
import Login from "./pages/Login";

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

        <Route
          path="/dashboard"
          element={<Layout/>}
        />
      </Routes>
    </>

  );
}
