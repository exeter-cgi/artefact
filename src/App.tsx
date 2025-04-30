import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ResearchSummary from './pages/ResearchSummary';
import DataCollection from './pages/DataCollection';
import BatteryRecycling from './pages/BatteryRecycling';
import VideoPage from './pages/VideoPage';
import Quiz from './pages/Quiz';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchSummary />} />
            <Route path="/data" element={<DataCollection />} />
            <Route path="/battery" element={<BatteryRecycling />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/quiz" element={<Quiz />} />

            {/* ✅ Redirect example */}
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
    </BrowserRouter>
  );
}

export default App;
