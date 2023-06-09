/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { getChainId, getNFTContract, getNFTDescription, getTokenId } from '../../../store/selectors';
import DetailsDropdown from '../../DetailsDropdown';
import AddressDisplay from '../../AddressDisplay';
import { CHAIN_PARAMS } from '../../../constants';
import ScContractAddress from '../ScContractAddress';
import ScNFTDetailBox from './ScNFTDetailBox';

// TODO: Add redux
const NFTDetailBox = () => {
  const nftContract = useSelector(getNFTContract);
  const description = useSelector(getNFTDescription);
  const tokenId = useSelector(getTokenId);
  const chainId = useSelector(getChainId);

  const blockExplorer = CHAIN_PARAMS[chainId]?.blockExplorerUrls?.at(0);
  const chainName = CHAIN_PARAMS[chainId]?.chainName;

  const NFTDetails = {
    'Contract Address': nftContract.address,
    'Token ID': tokenId,
    'Token Standard': 'ERC-721',
    Chain: chainName
  };

  const onNftAddressClick = () => {
    if (blockExplorer) {
      window.open(`${blockExplorer}/address/${nftContract.address}`, '_blank');
    }
  };

  return (
    <ScNFTDetailBox>
      <DetailsDropdown title="Description">
        <p className="description-text">{description}</p>
      </DetailsDropdown>
      <DetailsDropdown title="Details">
        {Object.entries(NFTDetails).map(([detailName, detail]) => (
          <div className="details-container" key={detailName}>
            <span className="detail-name">{detailName}</span>
            {detailName === 'Contract Address' && blockExplorer ? (
              <ScContractAddress className="detail-span">
                <AddressDisplay address={detail} isShortAddress onClick={onNftAddressClick} />
              </ScContractAddress>
            ) : (
              <span className="detail-span">{detail}</span>
            )}
          </div>
        ))}
      </DetailsDropdown>
    </ScNFTDetailBox>
  );
};

export default NFTDetailBox;
