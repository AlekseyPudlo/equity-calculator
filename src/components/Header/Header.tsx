import React from 'react';

interface HeaderProps {
  title: string;
  description?: string;
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, logo }) => {
  return (
    <header className="bg-blue-800 text-white py-4 px-6 flex items-center" style={{ background: 'linear-gradient(to left, #1c64f2, #1c64f2)' }}>
      {logo && <img src={logo} alt="App Logo" style={{ height: '2em' }} />}
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="text-md">{description}</p>}
    </header>
  );
};

export default Header;