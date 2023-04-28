import React from 'react';

const NavBar: React.FC = () => {

  return (
    <div className="fixed top-0 left-0 h-10 w-screen
    flex flex-row bg-green-950 text-white shadow-sm">
      <i className="flex-none w-16">A</i>
      <i className="flex-auto w-16">B</i>
      <i className="flex-auto w-16">C</i>
      <i className="flex-auto w-16">D</i>
    </div>
  )
}

export default NavBar;