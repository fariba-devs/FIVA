import { useSignIn } from "./useSignIn.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useState } from "react";
import { useUser } from "./useUser.jsx";
import ProfileSection from "./ProfileSection.jsx";

const SignInForm = () => {
  const { isAuthenticated, isLoading: ispending } = useUser();
  const { signIn, isLoading } = useSignIn();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  if (isLoading) return <Loading />;

  return isAuthenticated ? (
    // اگه لاگین هست، Profile نشون بده
    <ProfileSection />
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          email address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          onChange={handleChange}
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
            onChange={handleChange}
            className="mr-2 h-4 w-4 text-gray-600 border-b border-accent focus:outline-none"
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
        type="submit"
        className="w-full bg-gray-900 text-white py-3 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
      >
        Login
      </button>
    </form>
  );
};

export default SignInForm;
