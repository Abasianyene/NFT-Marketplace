import '../index.css';
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { useTheme } from '../context/ThemeProvider';

const Header = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <header className="header">
      {/* Left: Logo and Title */}
      <div className="header-logo">
        <AiOutlineShop size={28} color="#A259FF" />
        NFT Marketplace
      </div>
      {/* Right: Navigation Links */}
      <nav className="header-nav">
        <a href="#" className="header-link">Marketplace</a>
        <a href="#" className="header-link">Rankings</a>
        <a href="#" className="header-link">Connect a wallet</a>
        {/* <button className="header-toggle-btn" onClick={toggleTheme}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button> */}
        <label className='switch'>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        {/* Right: Sign Up Button */}
        <button className="header-signup-btn">
          <AiOutlineUser size={20} />
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Header