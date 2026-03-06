import React from 'react';

const supplyData = [
  { sku: 'SKU1', plant: 'Plant1', jan: 150, feb: 160, mar: 170 },
  { sku: 'SKU2', plant: 'Plant2', jan: 250, feb: 260, mar: 270 },
];

const SupplyGrid: React.FC = () => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">SKU</th>
            <th className="py-2">Plant</th>
            <th className="py-2">Jan</th>
            <th className="py-2">Feb</th>
            <th className="py-2">Mar</th>
          </tr>
        </thead>
        <tbody>
          {supplyData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{row.sku}</td>
              <td className="py-2">{row.plant}</td>
              <td className="py-2">{row.jan}</td>
              <td className="py-2">{row.feb}</td>
              <td className="py-2">{row.mar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyGrid;