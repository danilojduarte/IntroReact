import { Routes, Route } from "react-router-dom";

import { Inicial, SobreNos } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Routes path="/">
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </Routes>
  );
};

export { Router };
