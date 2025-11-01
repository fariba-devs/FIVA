import React from "react";
import { AlertTriangle } from "lucide-react"; // آیکن هشدار

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="flex items-center gap-3 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm">
      <AlertTriangle className="w-5 h-5 text-red-600" />
      <span className="font-medium">{error.message || String(error)}</span>
    </div>
  );
};

export default ErrorMessage;
