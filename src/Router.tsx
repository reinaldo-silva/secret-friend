import React from "react";
import { Route, Routes } from "react-router-dom";
import { ConfigGroup } from "./pages/ConfigGroup";
import { Home } from "./pages/Home";
import { NewGroup } from "./pages/NewGroup";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/group/new" element={<NewGroup />} />
      <Route path="/group/configs/:name" element={<ConfigGroup />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export { Router };
