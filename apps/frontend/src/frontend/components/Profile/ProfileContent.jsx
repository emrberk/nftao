/* eslint-disable react/prop-types */
// TODO: Remove eslint disables
import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import ListedIcon from '../../assets/article_black_24dp.svg';
import PurchasedIcon from '../../assets/shopping_bag_black_24dp.svg';
import { classNames } from '../../utils';
import ListNFTSPage from '../ListNFTS';
import PurchasesPage from '../Purchases';
import OwnedPage from '../OwnedPage';

const ScProfileContent = styled.div`
  width: 100%;
  padding: 0 2%;
  .profile-content-header {
    display: flex;
    border-bottom: 3px solid ${({ theme }) => theme.blue};
    margin-bottom: 20px;
    height: 60px;
    @media screen and (max-width: 480px) {
      height: 40px;
    }
    width: 100%;
    &-title {
      border: none;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      padding: 16px;
      transition: transform 0.3s ease;
      opacity: 0.5;
      @media screen and (max-width: 480px) {
        font-size: 18px;
        padding: 8px;
      }
    }

    &-title.isActive {
      opacity: 1;
    }

    &-title:hover {
      cursor: pointer;
      transform: translateX(5px);
      border-bottom: 2px solid ${({ theme }) => theme.blue};
      opacity: 1;
    }
  }
`;

const tabs = [
  { name: 'Listed', icon: ListedIcon },
  { name: 'Purchased', icon: PurchasedIcon },
  { name: 'Owned', icon: PurchasedIcon }
];

/* eslint-disable no-unused-vars */
const ProfileContent = ({ id }) => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].name);
  return (
    <ScProfileContent>
      <div className="profile-content-header">
        {tabs.map(tab => (
          <button
            key={tab.name}
            type="button"
            className={classNames({
              'profile-content-header-title': true,
              isActive: selectedTab === tab.name
            })}
            onClick={() => setSelectedTab(tab.name)}
          >
            <img src={tab.icon} alt={`${tab.name} Icon`} />
            {tab.name}
          </button>
        ))}
      </div>
      {selectedTab === 'Listed' && <ListNFTSPage profileId={id} selectedTab={selectedTab} />}
      {selectedTab === 'Purchased' && <PurchasesPage profileId={id} selectedTab={selectedTab} />}
      {selectedTab === 'Owned' && <OwnedPage profileId={id} selectedTab={selectedTab} />}
    </ScProfileContent>
  );
};

ProfileContent.propTypes = {
  id: string
};

ProfileContent.defaultProps = {
  id: ''
};

export default ProfileContent;