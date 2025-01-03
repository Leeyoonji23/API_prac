import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { globalStyles } from "./style/global";
import { Global } from "@emotion/react";

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:postId" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
