import React from 'react';

interface NavItemProps {
  icon?: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = "#", onClick }) => (
  <div className="header-nav-item">
    <a
      href={href}
      className="header-link"
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      onClick={onClick}
    >
      {Icon && <Icon size={16} />}
      {label}
    </a>
  </div>
);

export default NavItem;