import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "@/pages/Main";
import SameNumber from "@/pages/SameNumber/index";
import PercentCalculator from "@/pages/PercentCalculator/index";

import Loading from "@/components/Loading";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/PercentCalculator" element={<PercentCalculator />} />
          <Route path="/sameNumber" element={<SameNumber />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
