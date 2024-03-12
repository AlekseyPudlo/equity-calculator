import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 py-2 px-4 text-md mb-4"
      placeholder="Enter data..."
    />
  );
};

export default InputField;