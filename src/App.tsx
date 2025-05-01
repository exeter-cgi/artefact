import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import BatteryProduction from './pages/BatteryProduction';
import DataCollection from './pages/DataCollection';
import BatteryRecycling from './pages/BatteryRecycling';
import VideoPage from './pages/VideoPage';
import Quiz from './pages/Quiz';
import Footer from './components/layout/Footer';
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
            <Route path="/recycling" element={<BatteryRecycling />} />
            <Route path="/video" element={<VideoPage />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;