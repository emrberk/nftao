import { ethers } from 'ethers';
import { createSelector } from 'reselect';
import { getMarketplaceContractFn, getNFTContractFn } from '../components/utils';

export const getUser = state => state.user;

export const getMarketplace = state => state.marketplace;

export const getProfile = state => state.profile;

export const getUI = state => state.ui;

export const getNFT = state => state.nft;

export const getUserID = createSelector(getUser, ({ id }) => id.toLowerCase());

export const getUserSlug = createSelector(getUser, ({ slug }) => slug);

export const getUsername = createSelector(getUser, ({ name }) => name);

export const getChainID = createSelector(getMarketplace, ({ chainID }) => chainID);

export const getDefaultChainID = createSelector(getMarketplace, ({ defaultChainID }) => defaultChainID);

export const getMarketplaceContract = createSelector(getUserID, getChainID, getDefaultChainID, getMarketplaceContractFn);

export const getNFTContract = createSelector(getUserID, getChainID, getDefaultChainID, getNFTContractFn);

export const getIsLoadingContracts = createSelector(getMarketplace, ({ isLoadingContracts }) => isLoadingContracts);

export const getUserProfilePhoto = createSelector(getUser, ({ profilePhoto }) => profilePhoto);

export const getUserCoverPhoto = createSelector(getUser, ({ coverPhoto }) => coverPhoto);

export const getProfileID = createSelector(getProfile, ({ id }) => id);

export const getProfileName = createSelector(getProfile, ({ name }) => name);

export const getProfileSlug = createSelector(getProfile, ({ slug }) => slug);

export const getProfilePhoto = createSelector(getProfile, ({ profilePhoto }) => profilePhoto);

export const getCoverPhoto = createSelector(getProfile, ({ coverPhoto }) => coverPhoto);

export const getIsProfileOwner = createSelector([getUserID, getProfileID], (userID, profileID) => userID === profileID);

export const getDeviceType = createSelector(getUI, ({ deviceType }) => deviceType);

export const getIsLeftPanelOpened = createSelector(getUI, ({ leftPanelOpened }) => leftPanelOpened);

export const getIsLoading = createSelector(getUI, ({ loading }) => loading);

export const getCurrentPath = createSelector(getUI, ({ currentPath }) => currentPath);

export const getNFTMetadata = createSelector(getNFT, ({ metadata }) => metadata);

export const getIsListed = createSelector(getNFT, ({ isListed }) => isListed);

export const getIsOnAuction = createSelector(getNFT, ({ isOnAuction }) => isOnAuction);

export const getNFTName = createSelector(getNFTMetadata, ({ name }) => name);

export const getNFTOwner = createSelector(getNFT, ({ owner }) => owner);

export const getNFTSeller = createSelector(getNFT, ({ seller }) => seller);

export const getWinner = createSelector(getNFT, ({ winner }) => winner);

export const getNFTURL = createSelector(getNFTMetadata, ({ url }) => url);

export const getNFTDescription = createSelector(getNFTMetadata, ({ description }) => description);

export const getNFTTransactions = createSelector(getNFT, ({ transactions }) => transactions);

export const getTokenID = createSelector(getNFT, ({ tokenId }) => tokenId);

export const getPriceOfNFT = createSelector(getNFT, ({ price }) => price);

export const getTotalPriceOfNFT = createSelector(getNFT, ({ totalPrice }) => totalPrice);

export const getFormattedPrice = createSelector(getNFT, ({ totalPrice }) => (totalPrice ? ethers.utils.formatEther(totalPrice.toString()) : ''));

export const getItemID = createSelector(getNFT, ({ itemId }) => itemId);

export const getAuctionID = createSelector(getNFT, ({ auctionId }) => auctionId);

export const getTimeToEnd = createSelector(getNFT, ({ timeToEnd }) => timeToEnd);
