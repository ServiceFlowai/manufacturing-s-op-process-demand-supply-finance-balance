import React, { useState } from 'react';

const initialData = [
  { sku: 'SKU1', location: 'Location1', jan: 100, feb: 120, mar: 130 },
  { sku: 'SKU2', location: 'Location2', jan: 200, feb: 210, mar: 220 },
];

const EditableGrid: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleEdit = (index: number, month: string, value: number) => {
    const newData = [...data];
    newData[index][month] = value;
    setData(newData);
  };

  return (
    <div className="mt-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">SKU</th>
            <th className="py-2">Location</th>
            <th className="py-2">Jan</th>
            <th className="py-2">Feb</th>
            <th className="py-2">Mar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{row.sku}</td>
              <td className="py-2">{row.location}</td>
              <td className="py-2">
                <input
                  type="number"
                  value={row.jan}
                  onChange={(e) => handleEdit(index, 'jan', Number(e.target.value))}
                  className="border rounded p-1"
                />
              </td>
              <td className="py-2">
                <input
                  type="number"
                  value={row.feb}
                  onChange={(e) => handleEdit(index, 'feb', Number(e.target.value))}
                  className="border rounded p-1"
                />
              </td>
              <td className="py-2">
                <input
                  type="number"
                  value={row.mar}
                  onChange={(e) => handleEdit(index, 'mar', Number(e.target.value))}
                  className="border rounded p-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableGrid;