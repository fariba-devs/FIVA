// components/ui/Input.jsx
const Input = ({ label, error, required = false, ...props }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700 mb-2">
      {label}
      {required && <span className="ml-1">*</span>}
    </label>
    <input
      {...props}
      className={`w-full px-3 py-2 border-b focus:outline-none transition-colors ${
        error ? "border-red-500" : "border-accent"
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
  </div>
);

export default Input;
