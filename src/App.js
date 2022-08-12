import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import BranchForm from "./Components/taskTailwindCss.js";
import { Routes, Route } from "react-router-dom";
import ReportsAndLedger from "./Components/ReportsAndLedgers.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/BranchForm" element={<BranchForm />} />
        <Route path="" element={<ReportsAndLedger />} />
      </Routes>
    </>
  );
}

export default App;
