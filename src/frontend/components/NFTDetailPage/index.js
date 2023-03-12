import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDeviceType, getNFTOwner } from '../../store/selectors';
import NFTDetailBox from './NFTDetailBox';
import NFTDetailImage from './NFTDetailImage';
import NFTDetailHeader from './NFTDetailHeader';
import NFTDetailActivity from './NFTDetailActivity';
import { DEVICE_TYPES } from '../../constants';
import ScNFTDetailPage from './ScNFTDetailPage';
import LoadingSpinner from '../LoadingSpinner';

const NFTDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const deviceType = useSelector(getDeviceType);
  const owner = useSelector(getNFTOwner);

  useEffect(() => {
    if (owner) {
      setIsLoading(false);
    }
  }, [owner]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ScNFTDetailPage>
      {deviceType !== DEVICE_TYPES.DESKTOP && <NFTDetailHeader />}
      <div className="item-summary">
        <NFTDetailImage />
        <NFTDetailBox />
      </div>
      <div className="item-main">
        {deviceType === DEVICE_TYPES.DESKTOP && <NFTDetailHeader />}
        <NFTDetailActivity />
      </div>
    </ScNFTDetailPage>
  );
};

export default NFTDetailPage;
