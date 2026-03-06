import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', demand: 4000, supply: 2400, finance: 2400 },
  { month: 'Feb', demand: 3000, supply: 1398, finance: 2210 },
  { month: 'Mar', demand: 2000, supply: 9800, finance: 2290 },
  { month: 'Apr', demand: 2780, supply: 3908, finance: 2000 },
  { month: 'May', demand: 1890, supply: 4800, finance: 2181 },
  { month: 'Jun', demand: 2390, supply: 3800, finance: 2500 },
  { month: 'Jul', demand: 3490, supply: 4300, finance: 2100 },
];

const KPIChart: React.FC = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="demand" stroke="#8884d8" />
      <Line type="monotone" dataKey="supply" stroke="#82ca9d" />
      <Line type="monotone" dataKey="finance" stroke="#ffc658" />
    </LineChart>
  );
};

export default KPIChart;