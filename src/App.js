import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DiaryWritePage from "./DiaryWritePage";
import DiaryListPage from "./DiaryListPage";
import DiaryViewPage from "./DiaryViewPage";
import DiaryEditPage from "./DiaryEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/write" element={<DiaryWritePage />} />
        <Route path="/list" element={<DiaryListPage />} />
        <Route path="/view/:id" element={<DiaryViewPage />} />
        <Route path="/edit/:id" element={<DiaryEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;