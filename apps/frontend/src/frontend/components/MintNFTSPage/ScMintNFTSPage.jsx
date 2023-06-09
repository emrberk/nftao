import styled from 'styled-components';
import { theme } from '../../constants';

const ScMintNFTSPage = styled.div`
  width: 70%;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
  margin: 16px auto;
  .drop-container {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    @media screen and (max-width: 768px) {
      height: 200px;
    }
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed ${theme.secondaryBlue};
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease;
    margin: 20px auto;
    &:hover {
      background: ${theme.secondaryBlue};
    }
    .drop-title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    &.withImage {
      max-width: 80%;
      max-height: 80%;
      padding: 0;
    }
    .nftImage {
      max-height: 100%;
      width: auto;
    }
  }
  .randomButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;
    > button {
      margin: 0 20px;
      > svg {
        fill: ${theme.blue};
        height: 40px;
        width: 40px;
        transition: 0.2s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .uploadButton {
    margin: 0;
  }

  .formContainer {
    max-width: 450px;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    & > label {
      font-weight: 600;
      font-size: 24px;
    }
    & > input {
      height: 3rem;
      padding: 10px;
      font-size: 18px;
      color: #fff;
      margin-bottom: 20px;
    }
  }

  .listSwitch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    & > label {
      font-size: 18px;
      margin: 0;
    }
  }
  .mint-nft-button {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export default ScMintNFTSPage;
