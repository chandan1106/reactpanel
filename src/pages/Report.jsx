import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";

const Report = () => {
  const [monthlyData, setMonthlyData] = useState([8, 12, 10, 15, 9, 10]);
  const [weeklyData, setWeeklyData] = useState([2, 3, 1, 2, 1, 2, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonthlyData(monthlyData.map(() => Math.floor(Math.random() * 20)));
      setWeeklyData(weeklyData.map(() => Math.floor(Math.random() * 5)));
    }, 5000);
    return () => clearInterval(interval);
  }, [monthlyData, weeklyData]);

  const reports = [
    {
      title: "Monthly Report",
      description: "45 items generated",
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Reports",
            data: monthlyData,
            backgroundColor: "#facc15",
          },
        ],
      },
      bg: "from-yellow-50 to-yellow-100 text-yellow-700",
    },
    {
      title: "Weekly Report",
      description: "12 items generated",
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Reports",
            data: weeklyData,
            backgroundColor: "#ec4899",
          },
        ],
      },
      bg: "from-pink-50 to-pink-100 text-pink-700",
    },
    {
      title: "User Activity",
      description: "Recent logins and actions",
      type: "pie",
      data: {
        labels: ["Login", "Logout", "Upload", "Download"],
        datasets: [
          {
            data: [35, 25, 20, 20],
            backgroundColor: ["#6366f1", "#f97316", "#14b8a6", "#f43f5e"],
          },
        ],
      },
      bg: "from-indigo-50 to-indigo-100 text-indigo-700",
    },
    {
      title: "System Errors",
      description: "Critical and warning logs",
      type: "pie",
      data: {
        labels: ["Critical", "Warning", "Info"],
        datasets: [
          {
            data: [5, 10, 20],
            backgroundColor: ["#dc2626", "#fbbf24", "#6b7280"],
          },
        ],
      },
      bg: "from-red-50 to-red-100 text-red-700",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Reports Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Charts update every 5 seconds with live data simulation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report) => (
          <div
            key={report.title}
            className={`p-6 rounded-xl shadow hover:shadow-lg transition bg-gradient-to-r ${report.bg}`}
          >
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">
              {report.title}
            </h3>
            <p className="mt-1">{report.description}</p>
            <div className="w-full h-36 mt-4">
              {report.type === "bar" && (
                <Bar
                  data={report.data}
                  options={{
                    responsive: true,
                    animation: { duration: 1000 },
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true } },
                  }}
                />
              )}
              {report.type === "pie" && (
                <Pie
                  data={report.data}
                  options={{
                    responsive: true,
                    animation: { duration: 1000 },
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
