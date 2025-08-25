import { Eye } from "lucide-react";
import Button from "./button/Button";
import NFTCard from "./NFTCard";
import { useNavigate } from "react-router-dom";
import nft1 from "../assets/images/nft-1.png";
import nft2 from "../assets/images/nft-2.png";
import nft3 from "../assets/images/nft-3.png";
import avat from "../assets/images/avat.png";

const DiscoverMoreNFTsSection = () => {
  const navigate = useNavigate();
  const nfts = [
    {
      img: nft1,
      title: "NFT Title 1",
      artistImg: avat,
      artistName: "Anima Kid",
      price: "1.32 ETH",
      highestBid: "0.12 ETH",
    },
    {
      img: nft2,
      title: "NFT Title 2",
      artistImg: avat,
      artistName: "Crypto Queen",
      price: "2.10 ETH",
      highestBid: "0.22 ETH",
    },
    {
      img: nft3,
      title: "NFT Title 3",
      artistImg: avat,
      artistName: "Pixel Pro",
      price: "0.98 ETH",
      highestBid: "0.08 ETH",
    },
  ];

  return (
    <div className="mt-[80px]">
      <div className="max-w-6xl mx-auto container">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-main font-bold text-4xl">Discover More NFTs</h2>
            <p className="text-main text-xl">
              Explore a wider range of NFTs in our marketplace.
            </p>
          </div>
          <Button
            variant="outline"
            sxclass="px-4"
            size="sm"
            icon={<Eye size={16} />}
          >
            See All
          </Button>
        </div>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
          {nfts.map((nft, idx) => (
            <NFTCard
              key={nft.title + idx}
              img={nft.img}
              title={nft.title}
              artistImg={nft.artistImg}
              artistName={nft.artistName}
              price={nft.price}
              highestBid={nft.highestBid}
              onClick={() => navigate(`/nft/${encodeURIComponent(nft.title)}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMoreNFTsSection;
