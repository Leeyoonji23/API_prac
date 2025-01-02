import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Global } from "@emotion/react";
import { globalStyles } from "./style/common";

const App = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:postId" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
