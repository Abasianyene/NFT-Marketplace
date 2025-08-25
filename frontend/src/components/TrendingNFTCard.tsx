import React from 'react';

interface TrendingNFTCardProps {
  mainImg: string;
  thumbs: Array<{ src: string; alt: string }>;
  thumbCount?: string;
  title: string;
  artistImg: string;
  artistName: string;
}

const TrendingNFTCard: React.FC<TrendingNFTCardProps> = ({
  mainImg,
  thumbs,
  thumbCount,
  title,
  artistImg,
  artistName,
}) => (
  <div className="homepage-trending-card">
    <div className="homepage-trending-card-imgwrap">
      <img src={mainImg} alt={title} className="homepage-trending-mainimg" />
    </div>
    <div className="homepage-trending-thumbs">
      {thumbs.map((thumb, idx) => (
        <img key={idx} src={thumb.src} alt={thumb.alt} className="homepage-trending-thumb" />
      ))}
      {thumbCount && (
        <div className="homepage-trending-thumb homepage-trending-thumb-count">{thumbCount}</div>
      )}
    </div>
    <div className="homepage-trending-title">{title}</div>
    <div className="homepage-trending-artist">
      <img src={artistImg} alt={artistName} className="homepage-trending-artist-img" />
      <span className="homepage-trending-artist-name">{artistName}</span>
    </div>
  </div>
);

export default TrendingNFTCard;