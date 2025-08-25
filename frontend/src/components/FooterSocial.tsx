import React from 'react';

interface FooterSocialProps {
  icon: React.ElementType;
  href: string;
}

const FooterSocial: React.FC<FooterSocialProps> = ({ icon: Icon, href }) => (
  <a className="footer-social" href={href} target="_blank" rel="noopener noreferrer">
    <Icon size={20} color="#A259FF" />
  </a>
);

export default FooterSocial;