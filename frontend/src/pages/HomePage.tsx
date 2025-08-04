import { LuRocket } from "react-icons/lu";
import dog from '../assets/images/dog.png';
import cat from '../assets/images/cat.png';
import bear from '../assets/images/bear.png';
import mushroom1 from '../assets/images/mushroom1.png';
import mushroom2 from '../assets/images/mushroom2.png';
import mushroom3 from '../assets/images/mushroom3.png';
import mushroom4 from '../assets/images/mushroom4.png';
import robot1 from '../assets/images/robot1.png';
import robot2 from '../assets/images/robot2.png';
import robot3 from '../assets/images/robot3.png';
import keepitreal from '../assets/images/keepitreal.png';
import digilab from '../assets/images/digilab.png';
import gravityone from '../assets/images/gravityone.png';
import juanie from '../assets/images/juanie.png';
import bluewhale from '../assets/images/bluewhale.png';
import mrfox from '../assets/images/mrfox.png';
import shroomie from '../assets/images/shroomie.png';
import robotica from '../assets/images/robotica.png';
import rustybot from '../assets/images/rustyrobot.png';
import animakid from '../assets/images/animakid.png';
import dotgu from '../assets/images/dotgu.png';
import ghiblier from '../assets/images/ghiblier.png';
import art from '../assets/images/art.png';
import music from '../assets/images/music.png';
import photography from '../assets/images/photography.png';
import collectible from '../assets/images/collectible.png';
import video from '../assets/images/video.png';
import virtualworld from '../assets/images/virtualworld.png';
import sport from '../assets/images/sport.png';
import utility from '../assets/images/utility.png';
import distantgalaxy from '../assets/images/distantgalaxy.png';
import lifeonedena from '../assets/images/lifeonedena.png';
import astrofiction from '../assets/images/astrofiction.png';
import astronaut from '../assets/images/astronaut.png';
import video1 from '../assets/images/video.svg';
import '../index.css';
import earning from '../assets/images/earning.svg';
import collection from '../assets/images/collection.svg';
import wallet from '../assets/images/wallets.svg';
import Basketball from '../assets/images/Basketball.svg';
import Camera from '../assets/images/Camera.svg';
import MagicWand from '../assets/images/MagicWand.svg';
import MusicNote from '../assets/images/MusicNotes.svg';
import PaintBrush from '../assets/images/PaintBrush.svg';
import Planet from '../assets/images/Planet.svg';
import Swatches from '../assets/images/Swatches.svg';
import { IoEyeOutline } from "react-icons/io5";
import heroanimation from '../assets/images/heroanimation.gif';

function HomePage() {
  return (
    <main className="homepage-main">
      {/* Hero Section */}
      <div className="homepage-hero">
        {/* Left: Text and Actions */}
        <div className="homepage-hero-left">
          <h1 className="homepage-hero-title">
          Discover<br />Digital Art &<br/>Collect NFTs
          </h1>
          <p className="homepage-hero-desc">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>
          <button className="homepage-hero-btn">
            <LuRocket size={20} />
            Get Started
          </button>
          <div className="homepage-hero-stats">
            <div>
              <div className="homepage-hero-statnum">240k+</div>
              <div className="homepage-hero-statlabel">Total Sale</div>
            </div>
            <div>
              <div className="homepage-hero-statnum">100k+</div>
              <div className="homepage-hero-statlabel">Auctions</div>
            </div>
            <div>
              <div className="homepage-hero-statnum">240k+</div>
              <div className="homepage-hero-statlabel">Artists</div>
            </div>
          </div>
        </div>
        {/* Right: NFT Card */}
        <div className="homepage-hero-right">
            <img
              src={heroanimation}
              alt="Space Walking"
              className="homepage-nft-img" />
        </div>
      </div>
      {/* Trending Collection Section */}
      <section className="homepage-section homepage-trending">
        <h2 className="homepage-section-title">Trending Collection</h2>
        <p className="homepage-section-desc">Checkout Our Weekly Updated Trending Collection.</p>
        <div className="homepage-trending-cards">
          {/* Card 1 */}
          <div className="homepage-trending-card">
            <div className="homepage-trending-card-imgwrap">
              <img src={dog} alt="DSGN Animals" className="homepage-trending-mainimg" />
            </div>
            <div className="homepage-trending-thumbs">
              <img src={cat} alt="DSGN Animals 1" className="homepage-trending-thumb" />
              <img src={bear} alt="DSGN Animals 2" className="homepage-trending-thumb" />
              <div className="homepage-trending-thumb homepage-trending-thumb-count">1025+</div>
            </div>
            <div className="homepage-trending-title">DSGN Animals</div>
            <div className="homepage-trending-artist">
              <img src={mrfox} alt="MrFox" className="homepage-trending-artist-img" />
              <span className="homepage-trending-artist-name">MrFox</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="homepage-trending-card">
            <div className="homepage-trending-card-imgwrap">
              <img src={mushroom1} alt="Magic Mushrooms" className="homepage-trending-mainimg" />
            </div>
            <div className="homepage-trending-thumbs">
              <img src={mushroom2} alt="Magic Mushrooms 1" className="homepage-trending-thumb" />
              <img src={mushroom3} alt="Magic Mushrooms 2" className="homepage-trending-thumb" />
              <div className="homepage-trending-thumb homepage-trending-thumb-count">1025+</div>
            </div>
            <div className="homepage-trending-title">Magic Mushrooms</div>
            <div className="homepage-trending-artist">
              <img src={shroomie} alt="Shroomie" className="homepage-trending-artist-img" />
              <span className="homepage-trending-artist-name">Shroomie</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="homepage-trending-card">
            <div className="homepage-trending-card-imgwrap">
              <img src={robot1} alt="Disco Machines" className="homepage-trending-mainimg" />
            </div>
            <div className="homepage-trending-thumbs">
              <img src={robot2} alt="Disco Machines 1" className="homepage-trending-thumb" />
              <img src={robot3} alt="Disco Machines 2" className="homepage-trending-thumb" />
              <div className="homepage-trending-thumb homepage-trending-thumb-count">1025+</div>
            </div>
            <div className="homepage-trending-title">Disco Machines</div>
            <div className="homepage-trending-artist">
              <img src={robotica} alt="BeKind2Robots" className="homepage-trending-artist-img" />
              <span className="homepage-trending-artist-name">BeKind2Robots</span>
            </div>
          </div>
        </div>
      </section>
      {/* Top Creators Section */}
      <section className="homepage-section homepage-creators">
        <div className="homepage-creators-header">
          <div>
            <h2 className="homepage-section-title">Top Creators</h2>
            <p className="homepage-section-desc">Checkout Top Rated Creators On The NFT Marketplace</p>
          </div>
          <button className="homepage-creators-btn">
            <LuRocket size={20} color="#A259FF" />
            View Rankings
          </button>
        </div>
        <div className="homepage-creators-grid my-10">
          {[
            { name: 'Keepitreal', img: keepitreal },
            { name: 'DigiLab', img: digilab },
            { name: 'GravityOne', img: gravityone },
            { name: 'Juanie', img: juanie },
            { name: 'BlueWhale', img: bluewhale },
            { name: 'Mr Fox', img: mrfox },
            { name: 'Shroomie', img: shroomie },
            { name: 'Robotica', img: robotica },
            { name: 'RustyRobot', img: rustybot },
            { name: 'Animakid', img: animakid },
            { name: 'Dotgu', img: dotgu },
            { name: 'Ghiblier', img: ghiblier },
          ].map((creator, i) => (
            <div key={creator.name} className="homepage-creator-card">
              <div className="homepage-creator-rank">{i + 1}</div>
              <img src={creator.img} alt={creator.name} className="homepage-creator-img" />
              <div className="homepage-creator-name">{creator.name}</div>
              <div className="homepage-creator-sales">Total Sales: <span>34.53 ETH</span></div>
            </div>
          ))}
        </div>
      </section>
      {/* Browse Categories Section */}
      <section className="homepage-section homepage-categories">
        <h2 className="homepage-section-title">Browse Categories</h2>
        <div className="homepage-categories-grid">
          {/* Art */}
          <div className="homepage-category-card">
            <img src={art} alt="Art" className="homepage-category-img" />
            <img src={PaintBrush} alt="PaintBrush" className="homepage-category-icon" />
            <div className="homepage-category-label">Art</div>
          </div>
          {/* Collectibles */}
          <div className="homepage-category-card">
            <img src={collectible} alt="Collectibles" className="homepage-category-img" />
            <img src={Swatches} alt="Swatches" className="homepage-category-icon" />
            <div className="homepage-category-label">Collectibles</div>
          </div>
          {/* Music */}
          <div className="homepage-category-card">
            <img src={music} alt="Music" className="homepage-category-img" />
            <img src={MusicNote} alt="MusicNote" className="homepage-category-icon" />
            <div className="homepage-category-label">Music</div>
          </div>
          {/* Photography */}
          <div className="homepage-category-card">
            <img src={photography} alt="Photography" className="homepage-category-img" />
            <img src={Camera} alt="Camera" className="homepage-category-icon" />
            <div className="homepage-category-label">Photography</div>
          </div>
          {/* Video */}
          <div className="homepage-category-card">
            <img src={video} alt="Video" className="homepage-category-img" />
            <img src={video1} alt="video1" className="homepage-category-icon" />
            <div className="homepage-category-label">Video</div>
          </div>
          {/* Utility */}
          <div className="homepage-category-card">
            <img src={utility} alt="Utility" className="homepage-category-img" />
            <img src={MagicWand} alt="UtilityIcon" className="homepage-category-icon" />
            <div className="homepage-category-label">Utility</div>
          </div>
          {/* Sport */}
          <div className="homepage-category-card">
            <img src={sport} alt="Sport" className="homepage-category-img" />
            <img src={Basketball} alt="Basketball" className="homepage-category-icon" />
            <div className="homepage-category-label">Sport</div>
          </div>
          {/* Virtual Worlds */}
          <div className="homepage-category-card">
            <img src={virtualworld} alt="Virtual Worlds" className="homepage-category-img" />
            <img src={Planet} alt="VirtualWorldsIcon" className="homepage-category-icon" />
            <div className="homepage-category-label">Virtual Worlds</div>
          </div>
        </div>
      </section>
      {/* Discover More NFTs Section */}
      <section className="homepage-section homepage-discover">
        <div className="homepage-discover-header">
          <div>
            <h2 className="homepage-section-title">Discover More NFTs</h2>
            <p className="homepage-section-desc">Explore New Trending NFTs</p>
          </div>
          <button className="homepage-discover-btn">
            <IoEyeOutline size={20} color="#A259FF" />
            See All
          </button>
        </div>
        <div className="homepage-discover-cards">
          {/* NFT Card 1 */}
          <div className="homepage-discover-card">
            <img src={distantgalaxy} alt="NFT 1" className="homepage-discover-img" />
            <div className="homepage-discover-info">
              <div className="homepage-discover-title">Distant Galaxy</div>
              <div className="homepage-discover-artist">
                <img src={animakid} alt="NFT Artist" className="homepage-discover-artist-img" />
                <span className="homepage-discover-artist-name">Animakid</span>
              </div>
              <div className="homepage-discover-prices">
                <div>
                  <div className="homepage-discover-price-label">Price</div>
                  <div className="homepage-discover-price">1.63 ETH</div>
                </div>
                <div>
                  <div className="homepage-discover-price-label">Highest Bid</div>
                  <div className="homepage-discover-price">0.33 wETH</div>
                </div>
              </div>
            </div>
          </div>
          {/* NFT Card 2 */}
          <div className="homepage-discover-card">
            <img src={lifeonedena} alt="NFT 2" className="homepage-discover-img" />
            <div className="homepage-discover-info">
              <div className="homepage-discover-title">Life on Edena</div>
              <div className="homepage-discover-artist">
                <img src={dotgu} alt="NFT Artist" className="homepage-discover-artist-img" />
                <span className="homepage-discover-artist-name">Dotgu</span>
              </div>
              <div className="homepage-discover-prices">
                <div>
                  <div className="homepage-discover-price-label">Price</div>
                  <div className="homepage-discover-price">1.63 ETH</div>
                </div>
                <div>
                  <div className="homepage-discover-price-label">Highest Bid</div>
                  <div className="homepage-discover-price">0.33 wETH</div>
                </div>
              </div>
            </div>
          </div>
          {/* NFT Card 3 */}
          <div className="homepage-discover-card">
            <img src={astrofiction} alt="NFT 3" className="homepage-discover-img" />
            <div className="homepage-discover-info">
              <div className="homepage-discover-title">Astrofiction</div>
              <div className="homepage-discover-artist">
                <img src={astronaut} alt="NFT Artist" className="homepage-discover-artist-img" />
                <span className="homepage-discover-artist-name">Astronaut</span>
              </div>
              <div className="homepage-discover-prices">
                <div>
                  <div className="homepage-discover-price-label">Price</div>
                  <div className="homepage-discover-price">1.63 ETH</div>
                </div>
                <div>
                  <div className="homepage-discover-price-label">Highest Bid</div>
                  <div className="homepage-discover-price">0.33 wETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Highlight Section */}
      <section className="homepage-highlight">
        <div
          className="homepage-highlight-bg"
          style={{
            background: 'linear-gradient(180deg, rgba(58, 129, 191, 0.1) 0%, #A259FF 100%)',
            borderRadius: 0,
          }}
        >
          <img
            src={mushroom4}
            alt="Magic Mashrooms"
            className="homepage-highlight-img"
            style={{ borderRadius: 0 }}
          />
          <div className="homepage-highlight-overlay" />
          <div className="homepage-highlight-content">
            <div className="homepage-highlight-left">
              <div className="homepage-highlight-artist">
                <img src={shroomie} alt="Shroomie" className="homepage-highlight-artist-img" />
                <span className="homepage-highlight-artist-label">Shroomie</span>
              </div>
              <h2 className="homepage-highlight-title">Magic Mashrooms</h2>
              <button className="homepage-highlight-btn">
                <IoEyeOutline color="#A259FF" />
                See NFT
              </button>
            </div>
            <div className="homepage-highlight-auction">
              <div className="homepage-highlight-auction-label">Auction ends in:</div>
              <div className="homepage-highlight-auction-time">
                <span>59</span>
                <span>:</span>
                <span>59</span>
                <span>:</span>
                <span>59</span>
              </div>
              <div className="homepage-highlight-auction-units">
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="homepage-section homepage-howitworks">
        <h2 className="homepage-section-title">How It Works</h2>
        <p className="homepage-section-desc">Find Out How To Get Started</p>
        <div className="homepage-howitworks-cards">
          {/* Card 1 */}
          <div className="homepage-howitworks-card">
            <div className="homepage-howitworks-icon">
              <img src={wallet} alt="wallet" />
            </div>
            <h3 className="homepage-howitworks-title">Setup Your Wallet</h3>
            <p className="homepage-howitworks-desc">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
          </div>
          {/* Card 2 */}
          <div className="homepage-howitworks-card">
            <div className="homepage-howitworks-icon">
              <img src={collection} alt="collection" />
            </div>
            <h3 className="homepage-howitworks-title">Create Collection</h3>
            <p className="homepage-howitworks-desc">Upload your work and setup your collection. Add a description, social links and floor price.</p>
          </div>
          {/* Card 3 */}
          <div className="homepage-howitworks-card">
            <div className="homepage-howitworks-icon">
              <img src={earning} alt="earning" />
            </div>
            <h3 className="homepage-howitworks-title">Start Earning</h3>
            <p className="homepage-howitworks-desc">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
          </div>
        </div>
      </section>
      {/* Subscribe Widget Section */}
      <section className="homepage-subscribe">
        <div className="homepage-subscribe-box">
          <img src={astronaut} alt="Astronaut" className="homepage-subscribe-img" />
          <div className="homepage-subscribe-content">
            <h2 className="homepage-subscribe-title">Join Our Weekly Digest</h2>
            <p className="homepage-subscribe-desc">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            <form className="homepage-subscribe-form">
              <input type="email" placeholder="Enter your email here" className="homepage-subscribe-input" />
              <button type="submit" className="homepage-subscribe-btn">
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M22 4L12 14.01 2 4" /></svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;