import React from 'react';

const variances = [
  { id: 1, product: 'Product A', variance: 10 },
  { id: 2, product: 'Product B', variance: 15 },
  { id: 3, product: 'Product C', variance: 5 },
];

const VarianceTable: React.FC = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Top Variances</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Variance</th>
          </tr>
        </thead>
        <tbody>
          {variances.map((variance) => (
            <tr key={variance.id} className="text-center">
              <td className="py-2">{variance.product}</td>
              <td className="py-2">{variance.variance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VarianceTable;