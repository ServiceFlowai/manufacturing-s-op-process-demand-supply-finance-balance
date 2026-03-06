import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import KPIChart from '../components/KPIChart';
import VarianceTable from '../components/VarianceTable';

const Dashboard: React.FC = () => {
  const kpis = useSelector((state: RootState) => state.dashboardKPIs);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Executive S&OP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{kpi.name}</h2>
            <p className="text-xl">{kpi.value}</p>
          </div>
        ))}
      </div>
      <KPIChart />
      <VarianceTable />
    </div>
  );
};

export default Dashboard;