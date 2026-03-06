import React from 'react';
import EditableGrid from '../components/EditableGrid';

const DemandPlanning: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Demand Planning</h1>
      <EditableGrid />
    </div>
  );
};

export default DemandPlanning;