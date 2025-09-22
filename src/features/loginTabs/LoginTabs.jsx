import { useState } from "react";

const LoginTabs = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    rememberMe: false,
    agreeToPrivacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (activeTab === "signin") {
      console.log("Sign in data:", {
        username: formData.username,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
    } else {
      console.log("Register data:", {
        email: formData.email,
        password: formData.password,
        agreeToPrivacy: formData.agreeToPrivacy,
      });
    }
  };

  return (
    <section aria-label="LoginTabs" className="py-20 container mx-auto px-10">
      {/* Tab Navigation */}
      <div className="flex mb-15 justify-center border-b border-accent text-lg font-semibold">
        <button
          className={`px-6 py-3 uppercase tracking-wide transition-colors duration-200 ${
            activeTab === "signin"
              ? "text-gray-900 "
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("signin")}
          type="button"
        >
          Sign In
        </button>
        <button
          className={`px-6 py-3 uppercase tracking-wide transition-colors duration-200 ${
            activeTab === "register"
              ? "text-gray-900 "
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("register")}
          type="button"
        >
          Register
        </button>
      </div>

      {/* Tab Content */}
      <>
        {activeTab === "signin" ? (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Username or email address *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Your Username"
                className="w-full px-3 py-2 border-b border-accent focus:outline-none"
                minLength="2"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Your Password"
                className="w-full px-3 py-2 border-b border-accent focus:outline-none"
                minLength="2"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2 h-4 w-4 text-gray-600 border-b border-accent focus:outline-none"
                  required
                />
                <span className="text-lg text-gray-600">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors"
              >
                Forgot Password
              </a>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white py-3 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Your email address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                className="w-full px-3 py-2 border-b border-accent focus:outline-none"
                minLength="2"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="reg-password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Your Password"
                className="w-full px-3 py-2 border-b border-accent focus:outline-none"
                minLength="2"
                required
              />
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="mr-2 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                  required
                />
                <span className="text-lg text-gray-600">
                  I agree to the
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
            >
              Register
            </button>
          </div>
        )}
      </>
    </section>
  );
};

export default LoginTabs;
