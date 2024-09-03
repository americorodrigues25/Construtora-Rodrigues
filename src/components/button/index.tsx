import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`bg-orange-600 px-6 py-2 rounded-sm hover:bg-orange-700 duration-300 text-lg text-slate-200`}
    >
      {text}
    </button>
  );
};

export default Button;
