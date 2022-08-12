import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import BranchForm from "./Components/taskTailwindCss.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<BranchForm />} />
      </Routes>
    </>
  );
}

export default App;
