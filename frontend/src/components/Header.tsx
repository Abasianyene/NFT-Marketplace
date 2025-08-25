import '../index.css';
import React, { useState } from 'react';
import {
  Search,
  Sun,
  Moon,
  Wallet,
  ShoppingBag,
  Trophy,
} from 'lucide-react';
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { useTheme } from '../context/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import Button from './button/Button'; // Add this import
import NavItem from './NavItem'; // Add this import

const Header = () => {
  const {theme, toggleTheme} = useTheme();
  const navigate = useNavigate();
  return (
    <header className="header">
      {/* Left: Logo and Title */}
      <div className="header-logo">
        <AiOutlineShop style={{ color:'#A259FF' }} />NFT Marketplace
      </div>
      
      {/* Right: Navigation Links */}
      <nav className="header-nav">
        <Button
          variant="secondary"
          size="md"
          sxclass="flex items-center cursor-pointer gap-2 border border-gray-600 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Search className="h-4 w-4 text-main" />
          <span className='text-sm'>NFTs</span>
        </Button>
        {[
          { label: 'Marketplace', category: 'marketplace', icon: ShoppingBag },
          { label: 'Rankings', category: 'rankings', icon: Trophy },
          { label: 'Connect a wallet', category: 'wallet', icon: Wallet },
        ].map((item) => (
          <NavItem
            key={item.category}
            icon={item.icon}
            label={item.label}
            href="#"
          />
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
        <Button
          variant="primary"
          size="md"
          sxclass="header-signup-btn"
          onClick={() => navigate('/login')}
        >
          <AiOutlineUser size={20} />
          Sign Up
        </Button>
      </nav>
    </header>
  );
}

export default Header;