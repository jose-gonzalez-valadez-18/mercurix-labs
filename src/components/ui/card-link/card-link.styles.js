import { css } from "lit";

export const styles = css`
  .card-link {
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #181818;
    border-radius: 10px;
    border: 1px solid #33105d;
    padding: 10px;
    @media screen and (min-width: 481px) {
      padding: 0 50px;
    }
    .tag {
      display: flex;
      width: fit-content;
      font-size: 10px;
      padding: 5px 10px;
      border-radius: 15px;
      background: linear-gradient(135deg, #2a0b4d 0%, #33105d 60%, #5d2d91 100%);
      box-shadow:
        0 0 15px #d8b9ff30,
        inset 0 0 10px #d8b9ff10;
      color: white;
      @media screen and (min-width: 481px) {
        font-size: 16px;
      }
    }
    .image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      aspect-ratio: 3/2;
      margin: 0 auto;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .text-container {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .copy {
        font-size: 16px;
        font-weight: 800;
        width: 100%;
        color: white;
        margin: 0;
        text-align: center;
        @media screen and (min-width: 481px) {
          font-size: 25px;
        }
      }
      .tecnology {
        background-color: #a855f71a;
        padding: 05%;
        border-radius: 10px;
        font-size: 14px;
        @media screen and (min-width: 481px) {
          font-size: 20px;
        }
      }
      nav {
        width: 100%;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          list-style: none;
          padding: 0;
          gap: 10px;
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: white;
            font-size: 13px;
            padding: 0;
            gap: 5px;
            @media screen and (min-width: 481px) {
              font-size: 18px;
            }
            p {
              margin: 0;
            }
            span {
              color: #4cd7f6;
              display: flex;
            }
          }
        }
      }
    }
    a {
      width: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      text-decoration: none;
      color: #4cd7f6;
      padding: 20px;
      gap: 10px;
      @media screen and (min-width: 481px) {
        font-size: 25px;
      }
      @media screen and (min-width: 993px) {
        font-size: 20px;
        &:hover {
          span {
            transform: translateX(10px);
          }
          p {
            transform: translateX(10px);
          }
        }
      }
      p {
        margin: 0;
        transition: all 0.4s ease-in-out;
      }
      span {
        display: flex;
        transition: all 0.4s ease-in-out;
      }
    }
  }
`;
