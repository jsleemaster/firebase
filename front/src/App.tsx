import React, { Suspense ,lazy } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Main = lazy(()=> import('./pages/Main'))
const Sachunsung = lazy(()=> import('./pages/project/Sachunsung'))

const Loading = lazy(()=> import('./components/Loading'))

function App() {
  return (
    <Router>
        <Suspense fallback={<Loading /> }>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sachungsung" element={<Sachunsung />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
