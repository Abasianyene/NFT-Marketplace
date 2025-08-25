import React from 'react';

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => (
  <li>
    <a className="footer-link" href={href}>
      {label}
    </a>
  </li>
);

export default FooterLink;