import styled from 'styled-components';

const ScProfileHeader = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    height: 300px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    margin-bottom: 30px;
  }

  .profile-photos {
    position: relative;
    width: 100%;
    height: 80%;
    .cover-photo {
      width: 100%;
      height: 80%;
      position: relative;
      background: rgb(200, 227, 227, 0.3);
      &-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .profile-photo {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 200px;
      @media screen and (max-width: 768px) {
        width: 175px;
        height: 175px;
      }
      @media screen and (max-width: 480px) {
        width: 120px;
        height: 120px;
      }
      border: 5px solid ${({ theme }) => theme.blue};
      border-radius: 100%;
      margin-left: 5%;
      overflow: hidden;
      z-index: 5;
      &-image {
        width: 100%;
        height: 100%;
      }
      &-default {
        fill: ${({ theme }) => theme.buttonBackground};
        background: #fff;
      }
    }
  }
  .profile-names {
    width: 70%;
    height: 20%;
    margin-left: 2%;
    margin-bottom: 10px;
    margin-top: 10px;
    &-name {
      line-height: 36px;
      height: 36px;
      font-size: 36px;
      font-weight: 600;
      @media screen and (max-width: 768px) {
        line-height: 30px;
        height: 30px;
        font-size: 30px;
      }
      @media screen and (max-width: 480px) {
        line-height: 24px;
        height: 24px;
        font-size: 24px;
      }
    }
    &-id {
      text-overflow: ellipsis;
      overflow: hidden;
      color: rgb(105, 105, 105);
      font-size: 24px;
      white-space: nowrap;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
      @media screen and (max-width: 480px) {
        font-size: 18px;
      }
    }
  }
`;

export default ScProfileHeader;
