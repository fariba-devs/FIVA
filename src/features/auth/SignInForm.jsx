import { useSignIn } from "./useSignIn.jsx";
import { useUser } from "./useUser.jsx";
import Loading from "../../components/ui/Loading.jsx";
import ProfileSection from "./ProfileSection.jsx";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const { isAuthenticated } = useUser();
  const { signIn, isLoading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Real-time validation
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    // داده‌ها قبلاً validate شدن
    signIn(data);
  };

  // if (isLoading || isPending) return <Loading />;

  // اگر کاربر login است، ProfileSection نمایش بده
  if (isAuthenticated) {
    return <ProfileSection />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email Field ***********************************************************************/}
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email address *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email Address"
          className={`w-full px-3 py-2 border-b focus:outline-none transition-colors ${
            errors.email ? "border-red-500" : "border-accent"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field ***********************************************************************/}
      <div>
        <label
          htmlFor="password"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Password *
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          className={`w-full px-3 py-2 border-b focus:outline-none transition-colors ${
            errors.password ? "border-red-500" : "border-accent"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Remember Me & Forgot Password ***********************************************************************/}
      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded cursor-pointer"
            {...register("rememberMe")}
          />
          <span className="text-lg text-gray-600">Remember Me</span>
        </label>
        <a
          href="/forgot-password"
          className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors"
        >
          Forgot Password?
        </a>
      </div>

      {/* Submit Button ***********************************************************************/}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
};

export default SignInForm;
