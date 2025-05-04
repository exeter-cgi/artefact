import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import DataCollection from './pages/DataCollection';
import BatteryProduction from './pages/BatteryProduction';
import BatteryRecycling from './pages/BatteryRecycling';
import BatteryLifespan from './pages/BatteryLifespan'
import Analysis from './pages/Analysis';
import Quiz from './pages/Quiz';
import ScrollReset from './components/ScrollReset';


function App() {
  return (
    <Router>
      {/* 👇 Force page to top on route change, no scroll animation */}
      <ScrollReset />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/production" element={<BatteryProduction/>} />
            <Route path="/data" element={<DataCollection />} />
            <Route path="/lifespan" element={<BatteryLifespan />} />
            <Route path="/recycling" element={<BatteryRecycling />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/quiz" element={<Quiz />} />

            {/* Optional redirect example */}
            <Route path="/start" element={<Navigate to="/battery" replace />} />

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="p-10 text-center text-red-600 text-xl">
                  404 – Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;