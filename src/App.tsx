import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DemandPlanning from './pages/DemandPlanning';
import SupplyPlanning from './pages/SupplyPlanning';
import FinanceReview from './pages/FinanceReview';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demand" element={<DemandPlanning />} />
        <Route path="/supply" element={<SupplyPlanning />} />
        <Route path="/finance" element={<FinanceReview />} />
      </Routes>
    </div>
  );
}

export default App;