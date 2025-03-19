import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Players } from './pages/Players';
import { Schools } from './pages/Schools';
import { PlayerProfile } from './pages/PlayerProfile';
import { SchoolProfile } from './pages/SchoolProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:id" element={<PlayerProfile />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/schools/:id" element={<SchoolProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;