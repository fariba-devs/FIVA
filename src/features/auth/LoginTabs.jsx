import { useState } from "react";
import SignInForm from "./SignInForm.jsx";
import SignupForm from "./SignupForm.jsx";

const LoginTabs = () => {
  const [activeTab, setActiveTab] = useState("signin");

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
      <>{activeTab === "signin" ? <SignInForm /> : <SignupForm />}</>
    </section>
  );
};

export default LoginTabs;
