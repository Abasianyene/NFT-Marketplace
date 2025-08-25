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
import Button from '../components/button/Button'; 
import Input from '../components/inputs/Input';
import NFTCard from '../components/NFTCard';
import CreatorCard from '../components/CreatorCard';
import CategoryCard from '../components/CategoryCard';
import TrendingNFTCard from '../components/TrendingNFTCard';
import HowItWorksCard from '../components/HowItWorksCard';
import NewsletterInput from '../components/inputs/NewsletterInput';

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
          <Button
            variant="primary"
            size="lg"
            sxclass="homepage-hero-btn"
          >
            <LuRocket size={20} />
            Get Started
          </Button>
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
          <TrendingNFTCard
            mainImg={dog}
            thumbs={[
              { src: cat, alt: "DSGN Animals 1" },
              { src: bear, alt: "DSGN Animals 2" }
            ]}
            thumbCount="1025+"
            title="DSGN Animals"
            artistImg={mrfox}
            artistName="MrFox"
          />
          <TrendingNFTCard
            mainImg={mushroom1}
            thumbs={[
              { src: mushroom2, alt: "Magic Mushrooms 1" },
              { src: mushroom3, alt: "Magic Mushrooms 2" }
            ]}
            thumbCount="1025+"
            title="Magic Mushrooms"
            artistImg={shroomie}
            artistName="Shroomie"
          />
          <TrendingNFTCard
            mainImg={robot1}
            thumbs={[
              { src: robot2, alt: "Disco Machines 1" },
              { src: robot3, alt: "Disco Machines 2" }
            ]}
            thumbCount="1025+"
            title="Disco Machines"
            artistImg={robotica}
            artistName="BeKind2Robots"
          />
        </div>
      </section>
      {/* Top Creators Section */}
      <section className="homepage-section homepage-creators">
        <div className="homepage-creators-header">
          <div>
            <h2 className="homepage-section-title">Top Creators</h2>
            <p className="homepage-section-desc">Checkout Top Rated Creators On The NFT Marketplace</p>
          </div>
          <Button
            variant="primary"
            size="md"
            sxclass="homepage-creators-btn"
          >
            <LuRocket size={20} color="#A259FF" /> 
            View Rankings
          </Button>
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
            <CreatorCard
              key={creator.name}
              rank={i + 1}
              img={creator.img}
              name={creator.name}
              sales="34.53 ETH"
            />
          ))}
        </div>
      </section>
      {/* Browse Categories Section */}
      <section className="homepage-section homepage-categories">
        <h2 className="homepage-section-title">Browse Categories</h2>
        <div className="homepage-categories-grid">
          {[
            { img: art, icon: PaintBrush, label: "Art" },
            { img: collectible, icon: Swatches, label: "Collectibles" },
            { img: music, icon: MusicNote, label: "Music" },
            { img: photography, icon: Camera, label: "Photography" },
            { img: video, icon: video1, label: "Video" },
            { img: utility, icon: MagicWand, label: "Utility" },
            { img: sport, icon: Basketball, label: "Sport" },
            { img: virtualworld, icon: Planet, label: "Virtual Worlds" },
          ].map((cat, idx) => (
            <CategoryCard
              key={cat.label}
              img={cat.img}
              icon={cat.icon}
              label={cat.label}
            />
          ))}
        </div>
      </section>
      {/* Discover More NFTs Section */}
      <section className="homepage-section homepage-discover">
        <div className="homepage-discover-header">
          <div>
            <h2 className="homepage-section-title">Discover More NFTs</h2>
            <p className="homepage-section-desc">Explore New Trending NFTs</p>
          </div>
          <Button
            variant="primary"
            size="md"
            sxclass="homepage-discover-btn"
          >
            <IoEyeOutline size={20} color="#A259FF" />
            See All
          </Button>
        </div>
        <div className="homepage-discover-cards">
          {[
            {
              img: distantgalaxy,
              title: "Distant Galaxy",
              artistImg: animakid,
              artistName: "Animakid",
              price: "1.63 ETH",
              highestBid: "0.33 wETH"
            },
            {
              img: lifeonedena,
              title: "Life on Edena",
              artistImg: dotgu,
              artistName: "Dotgu",
              price: "1.63 ETH",
              highestBid: "0.33 wETH"
            },
            {
              img: astrofiction,
              title: "Astrofiction",
              artistImg: astronaut,
              artistName: "Astronaut",
              price: "1.63 ETH",
              highestBid: "0.33 wETH"
            }
          ].map((nft, idx) => (
            <NFTCard
              key={nft.title}
              img={nft.img}
              title={nft.title}
              artistImg={nft.artistImg}
              artistName={nft.artistName}
              price={nft.price}
              highestBid={nft.highestBid}
            />
          ))}
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
              <Button
                variant="primary"
                size="md"
                sxclass="homepage-highlight-btn"
              >
                <IoEyeOutline color="#A259FF" />
                See NFT
              </Button>
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
          {[
            {
              icon: wallet,
              title: "Setup Your Wallet",
              desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            },
            {
              icon: collection,
              title: "Create Collection",
              desc: "Upload your work and setup your collection. Add a description, social links and floor price."
            },
            {
              icon: earning,
              title: "Start Earning",
              desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            }
          ].map((card, idx) => (
            <HowItWorksCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </section>
      {/* Subscribe Widget Section */}
      <section className="homepage-subscribe">
        <div className="homepage-subscribe-box">
          <img src={astronaut} alt="Astronaut" className="homepage-subscribe-img" />
          <div className="homepage-subscribe-content">
            <h2 className="homepage-subscribe-title">Join Our Weekly Digest</h2>
            <p className="homepage-subscribe-desc">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            <NewsletterInput
              label="Enter your email here"
              buttonText="Subscribe"
              onSubmit={email => {
                // handle newsletter subscription logic here
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;