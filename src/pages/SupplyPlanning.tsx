import React from 'react';
import SupplyGrid from '../components/SupplyGrid';

const SupplyPlanning: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Supply Planning</h1>
      <SupplyGrid />
    </div>
  );
};

export default SupplyPlanning;