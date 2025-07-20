// src/assets/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ loggedIn, setLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"}>Home</NavLink></li>
      <li><NavLink to="/research" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"}>Research</NavLink></li>
      <li><NavLink to="/pages/teaching.html" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"}>Teaching</NavLink></li>
      {loggedIn && <li><NavLink to="/add-files" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"}>Add Files</NavLink></li>}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-lg shadow-sm">
      <nav className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold font-['Roboto_Slab'] tracking-tight">
            Mustofa Mamun
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
          <div className="ml-4">
            {!loggedIn ? (
              <Link to="/login" className="btn btn-soft text-white btn-primary btn-sm">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-error btn-sm">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}