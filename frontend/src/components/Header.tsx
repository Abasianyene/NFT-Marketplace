import '../index.css';
import {
  Search,
  Sun,
  Moon,
  Menu,
  Wallet,
  ShoppingBag,
  Trophy,
} from 'lucide-react';
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
        <button
          className="flex items-center cursor-pointer gap-2 border border-gray-600 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
          <Search className="h-4 w-4 text-main" />
          <span className='text-sm'>NFTs</span>
      </button>
        {[
          { name: 'Marketplace', category: 'marketplace', icon: ShoppingBag },
          { name: 'Rankings', category: 'rankings', icon: Trophy },
          { name: 'Connect a wallet', category: 'wallet', icon: Wallet },
        ].map((item) => (
          <div key={item.category} className="header-nav-item">
            <a href="#" className="header-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {item.icon && <item.icon size={16} />}
              {item.name}
            </a>
          </div>
        ))}
        {/* Theme Toggle Switch */}
        <label className='switch theme-toggle' style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sun size={16} color={theme === 'light' ? '#FFD700' : '#888'} />
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            style={{ margin: '0 4px' }}
          />
          <span className="slider round"></span>
          <Moon size={16} color={theme === 'dark' ? '#A259FF' : '#888'} />
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