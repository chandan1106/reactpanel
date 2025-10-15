import React, { useState, useEffect } from "react";
import { Users, FileText, Settings } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Live data simulation
  const [userData, setUserData] = useState([120, 200, 150, 170, 220, 190, 250]);
  const [reportData, setReportData] = useState([5, 8, 6, 10, 12, 7, 15]);
  const [updateData, setUpdateData] = useState([1, 2, 0, 3, 2, 1, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserData(userData.map(() => Math.floor(Math.random() * 300)));
      setReportData(reportData.map(() => Math.floor(Math.random() * 20)));
      setUpdateData(updateData.map(() => Math.floor(Math.random() * 5)));
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, [userData, reportData, updateData]);

  const stats = [
    {
      title: "Active Users",
      value: userData[userData.length - 1],
      icon: <Users size={24} />,
      bg: "from-blue-50 to-blue-100 text-blue-700",
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Users",
            data: userData,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
    },
    {
      title: "Reports Generated",
      value: reportData[reportData.length - 1],
      icon: <FileText size={24} />,
      bg: "from-green-50 to-green-100 text-green-700",
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Reports",
            data: reportData,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
    },
    {
      title: "Settings Updated",
      value: updateData[updateData.length - 1],
      icon: <Settings size={24} />,
      bg: "from-purple-50 to-purple-100 text-purple-700",
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Updates",
            data: updateData,
            borderColor: "#a855f7",
            backgroundColor: "rgba(168,85,247,0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 relative group">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Analytics update every 5 seconds.
        </p>
        {/* Tooltip */}
        <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition bg-gray-700 text-white text-xs px-2 py-1 rounded">
          Hover for details
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`flex flex-col p-6 rounded-xl shadow hover:shadow-lg transition bg-gradient-to-r ${stat.bg}`}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-full mr-4">
                {stat.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>

            <div className="w-full h-32">
              <Line
                data={stat.chartData}
                options={{
                  responsive: true,
                  animation: { duration: 1000 },
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: "rgba(0,0,0,0.05)" }, ticks: { stepSize: 50 } },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
