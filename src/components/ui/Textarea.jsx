// components/ui/Textarea.jsx
const Textarea = ({ label, error, required = false, ...props }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700 mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <textarea
      {...props}
      className={`w-full px-3 py-2 border-b focus:outline-none transition-colors ${
        error ? "border-red-500" : "border-accent"
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
  </div>
);

export default Textarea;
