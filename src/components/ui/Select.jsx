// components/ui/Select.jsx
const Select = ({ label, required = false, options = [], ...props }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700 mb-2">
      {label}
      {required && <span className="ml-1">*</span>}
    </label>
    <select
      {...props}
      className="w-full px-3 py-2  pr-10 border-b text-gray-600 cursor-pointer focus:outline-none focus:ring-0"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
