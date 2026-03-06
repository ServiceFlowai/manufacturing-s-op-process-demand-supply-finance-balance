import React from 'react';

const financialData = {
  revenue: 100000,
  cogs: 60000,
  grossMargin: 40000,
  workingCapital: 15000,
};

const FinancialSummary: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-xl">${financialData.revenue}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">COGS</h2>
          <p className="text-xl">${financialData.cogs}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Gross Margin</h2>
          <p className="text-xl">${financialData.grossMargin}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Working Capital</h2>
          <p className="text-xl">${financialData.workingCapital}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;