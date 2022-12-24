import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import ScNFTCard from './ScNFTCard';
import { getMarketplaceContract, getNFTContract, getUserID } from '../../store/selectors';
import AddressDisplay from '../AddressDisplay';

const NFTCard = ({ item, loadItems, selectedTab }) => {
  const userID = useSelector(getUserID);
  const marketplaceContract = useSelector(getMarketplaceContract);
  const nftContract = useSelector(getNFTContract);

  // eslint-disable-next-line no-unused-vars
  const [sellPrice, setSellPrice] = useState(null);
  const [showSellButton, setShowSellButton] = useState(false);
  const [showBuyButton, setShowBuyButton] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const buyMarketItem = async itemToBuy => {
    await (await marketplaceContract.purchaseItem(itemToBuy.itemId, { value: itemToBuy.totalPrice })).wait();
    loadItems();
  };

  const sellMarketItem = async () => {
    const isApproved = await nftContract.isApprovedForAll(userID, marketplaceContract.address);
    if (!isApproved) {
      await (await nftContract.setApprovalForAll(marketplaceContract.address, true)).wait();
    }
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(sellPrice.toString());
    await (await marketplaceContract.makeItem(nftContract.address, item.tokenId, listingPrice)).wait();
    loadItems();
  };

  const formattedPrice = item.totalPrice && `${ethers.utils.formatEther(item.totalPrice)} ETH`;

  const inProfilePage = location.pathname.includes('/user');

  const profileID = inProfilePage && location.pathname.split('/')[2];

  const handleHoverCard = () => {
    switch (selectedTab) {
      case 'Listed':
        if (profileID !== userID && item.auctionId === undefined) {
          setShowBuyButton(true);
        }
        break;
      case 'Purchased':
        if (profileID === userID) setShowSellButton(true);
        break;
      case 'Owned':
        if (profileID === userID) setShowSellButton(true);
        break;
      case 'Home':
        if (item.seller !== userID && item.auctionId === undefined) setShowBuyButton(true);
        break;
      default:
        break;
    }
  };

  const handleHoverLeave = () => {
    setShowSellButton(false);
    setShowBuyButton(false);
  };
  // TODO @Bugra: add onclick event for detail page
  // eslint-disable-next-line no-unused-vars
  const handleGoToDetailPage = () => {
    console.log('go to detail page', item);
    navigate(`/nft/${item.cid}`, { state: { item } });
  };

  const handleBuyButtonClicked = e => {
    e.stopPropagation();
    buyMarketItem(item);
  };

  const handleSellButtonClicked = e => {
    e.stopPropagation();
    sellMarketItem();
  };

  return (
    <ScNFTCard onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave} onClick={handleGoToDetailPage}>
      {item.url && (
        <div className="nft-image">
          <img src={item.url} alt="nftImage" />
        </div>
      )}
      <div className="nft-info">
        <div className="nft-info-name">
          <span className="nft-info-name-itemName">{item.name}</span>
          {!inProfilePage && <AddressDisplay className="nft-info-name-seller" address={item.seller} label="Seller" />}
        </div>
        <div className="nft-info-price">
          {!showBuyButton && !showSellButton && <div className="nft-info-price-text">{formattedPrice}</div>}
          {showBuyButton && (
            <button type="button" className="nft-info-price-buy" onClick={handleBuyButtonClicked}>
              Buy for {formattedPrice}
            </button>
          )}
          {showSellButton && (
            <button type="button" className="nft-info-price-sell" onClick={handleSellButtonClicked}>
              Sell Now
            </button>
          )}
        </div>
      </div>
    </ScNFTCard>
  );
};

export default NFTCard;
