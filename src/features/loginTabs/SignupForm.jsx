import { useSignup } from "./useSignup.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useState } from "react";

const SignupForm = () => {
  const { signup, isLoading } = useSignup();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeToPrivacy: false,
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
    signup(formData);
  };

  if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Your email address *
        </label>
        <input
          id="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
            onChange={handleChange}
            className="mr-2 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
            required
          />
          <span className="text-lg text-gray-600">
            I agree to the{" "}
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
        type="submit"
        className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
      >
        Register
      </button>
    </form>
  );
};

export default SignupForm;
