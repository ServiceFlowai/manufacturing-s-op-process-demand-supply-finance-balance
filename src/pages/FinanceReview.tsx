import React from 'react';
import FinancialSummary from '../components/FinancialSummary';

const FinanceReview: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Finance & P&L Alignment</h1>
      <FinancialSummary />
    </div>
  );
};

export default FinanceReview;