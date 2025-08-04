import '../index.css'
import { AiOutlineShop } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo and Info */}
        <div className="footer-col">
          <div className="footer-logo">
            <AiOutlineShop size={24} color="#A259FF" />
            NFT Marketplace
          </div>
          <div className="footer-desc">NFT marketplace UI created with Anima for Figma.</div>
          <div className="footer-community">Join our community</div>
          <div className="footer-socials">
            <a href="#" aria-label="Discord"><FaDiscord /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        {/* Center: Explore Links */}
        <div className="footer-col footer-col-center">
          <div className="footer-title">Explore</div>
          <ul className="footer-links">
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Rankings</a></li>
            <li><a href="#">Connect a wallet</a></li>
          </ul>
        </div>
        {/* Right: Subscribe */}
        <div className="footer-col footer-col-right">
          <div className="footer-digest-title">Join Our Weekly Digest</div>
          <div className="footer-digest-desc">Get exclusive promotions & updates straight to your inbox.</div>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email here" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-copyright">© NFT Market. Use this template freely.</div>
    </footer>
  );
}

export default Footer;
