import { useSignup } from "./useSignup.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { signup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange", // برای real-time validation
    defaultValues: {
      email: "",
      password: "",
      agreeToPrivacy: false,
    },
  });

  const onSubmit = (data) => {
    // داده‌ها قبلاً validate شدن
    signup(data);
  };

  // if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email Field ***************************************************************************/}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Your email address *
        </label>
        <input
          type="email"
          placeholder="Your Email Address"
          className={`w-full px-3 py-2 border-b focus:outline-none ${
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

      {/* Password Field ****************************************************************************/}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Password *
        </label>
        <input
          type="password"
          placeholder="Your Password"
          className={`w-full px-3 py-2 border-b focus:outline-none ${
            errors.password ? "border-red-500" : "border-accent"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: "Password must contain uppercase, lowercase and number",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}

        {/* Password Strength Indicator */}
        {watch("password") && !errors.password && (
          <p className="text-green-500 text-sm mt-1">✓ Strong password</p>
        )}
      </div>

      {/* Privacy Policy Checkbox ****************************************************************************/}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded mt-1"
            {...register("agreeToPrivacy", {
              required: "You must agree to the Privacy Policy",
            })}
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
        {errors.agreeToPrivacy && (
          <p className="text-red-500 text-sm mt-1">
            {errors.agreeToPrivacy.message}
          </p>
        )}
      </div>

      {/* Submit Button ****************************************************************************/}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default SignupForm;
