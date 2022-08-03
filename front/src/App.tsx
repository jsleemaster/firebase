import React, { Suspense ,lazy } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Main = lazy(()=> import('./pages/Main'))
const SameNumber = lazy(()=> import('./pages/SameNumber/index'))

const Loading = lazy(()=> import('./components/Loading'))

function App() {
  return (
    <Router>
        <Suspense fallback={<Loading /> }>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sameNumber" element={<SameNumber />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
