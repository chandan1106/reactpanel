import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  // User state
  const [user, setUser] = useState(null); // null = not logged in
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("login"); // "login" or "signup"

  // Form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSignup = (e) => {
    e.preventDefault();
    // Simulate login
    setUser({
      name: username,
      avatar: `https://ui-avatars.com/api/?name=${username}&background=0D8ABC&color=fff`,
    });
    setShowForm(false);
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-full px-6 py-4 flex items-center justify-between">
        {/* Left: Mobile sidebar toggle + logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-white/20 transition md:hidden"
          >
            <Menu size={22} />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="#"
              alt="Logo"
              className="h-8 w-8 rounded-full bg-white/20 p-1"
            />
            <span className="text-xl font-semibold tracking-wide">VEUP.io</span>
          </div>
        </div>

        {/* Right: User / Login */}
        <div className="flex items-center space-x-4">
          {user ? (
            // Logged in view
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white rounded-lg text-blue-700 font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            // Not logged in view
            <>
              <button
                onClick={() => {
                  setFormType("login");
                  setShowForm(true);
                }}
                className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setFormType("signup");
                  setShowForm(true);
                }}
                className="px-4 py-2 bg-white rounded-lg text-blue-700 font-semibold hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Login/Signup Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">
              {formType === "login" ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleLoginSignup} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {formType === "login" ? "Login" : "Sign Up"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
