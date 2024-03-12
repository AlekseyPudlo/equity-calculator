import React from 'react';


const Button: React.FC = () => {
  return (
    <div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-lg rounded-md"
        style={{ display: 'block', margin: 'auto', marginTop: '4rem' }}
      >
        Submit
      </button>
    </div>
  );
};


export default Button;

