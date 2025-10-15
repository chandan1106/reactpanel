import React, { useState } from "react";

const Configuration = () => {
  // Initial columns and data
  const [columns, setColumns] = useState(["ID", "Name", "Value"]);
  const [data, setData] = useState([
    { ID: 1, Name: "Config A", Value: "Enabled" },
    { ID: 2, Name: "Config B", Value: "Disabled" },
    { ID: 3, Name: "Config C", Value: "Enabled" },
  ]);

  const addColumn = () => {
    const newCol = prompt("Enter new column name:");
    if (newCol && !columns.includes(newCol)) {
      setColumns([...columns, newCol]);
      // Add empty value for new column in each row
      const updatedData = data.map((row) => ({ ...row, [newCol]: "" }));
      setData(updatedData);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Configuration
        </h1>
        <button
          onClick={addColumn}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add Column
        </button>
      </div>

      <div className="overflow-auto rounded-xl shadow bg-white dark:bg-gray-800">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-gray-700 dark:text-gray-200 font-semibold border-b border-gray-200 dark:border-gray-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                  >
                    {row[col] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Configuration;
