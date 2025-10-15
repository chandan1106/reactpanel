import React from "react";
import { User } from "lucide-react";

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    joined: "2024-01-15",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-6xl font-bold">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">Role: {user.role}</p>
          <p className="text-gray-600">Joined: {user.joined}</p>

          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-gray-700">Email Notifications</h3>
            <p className="text-gray-600">Manage how you receive notifications via email.</p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-gray-700">Privacy Settings</h3>
            <p className="text-gray-600">Control visibility of your profile and data.</p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-gray-700">Connected Apps</h3>
            <p className="text-gray-600">Manage third-party apps connected to your account.</p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow transition">
            <h3 className="font-semibold text-gray-700">Security</h3>
            <p className="text-gray-600">Enable two-factor authentication and other security options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
