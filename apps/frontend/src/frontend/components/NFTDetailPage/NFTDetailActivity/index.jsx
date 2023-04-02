import React from 'react';
import { useSelector } from 'react-redux';
import DetailsDropdown from '../../DetailsDropdown';
import ScNFTDetailActivity from './ScNFTDetailActivity';
import AddressDisplay from '../../AddressDisplay';
import { getNFTTransactions } from '../../../store/selectors';
import ScContractAddress from '../ScContractAddress';

const NFTDetailActivity = () => {
  const transactions = useSelector(getNFTTransactions);

  return (
    <DetailsDropdown title="Item Activity">
      <ScNFTDetailActivity>
        <tr className="nft-activity-title">
          <th>Event</th>
          <th>Price</th>
          <th>From</th>
          <th>To</th>
        </tr>
        {Object.entries(transactions).map(([transactionId, transaction]) => (
          <tr className="nft-activity-content" key={transactionId}>
            <td className="nft-activity-content-item">{transaction.type}</td>
            <td className="nft-activity-content-item">{transaction.price && `${transaction.price} ETH`}</td>
            <td className="nft-activity-content-item">
              <ScContractAddress>
                <AddressDisplay address={transaction.from} />
              </ScContractAddress>
            </td>
            <td className="nft-activity-content-item">
              <ScContractAddress>
                <AddressDisplay address={transaction.to} isShortAddress />
              </ScContractAddress>
            </td>
          </tr>
        ))}
      </ScNFTDetailActivity>
    </DetailsDropdown>
  );
};

export default NFTDetailActivity;