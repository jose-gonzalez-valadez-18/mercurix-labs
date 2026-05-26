import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .hero-main {
    width: 100%;
    height: calc(100svh - 70px);
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    box-shadow:
      0 8px 28px rgba(37, 4, 80, 0.35),
      0 0 22px rgba(51, 16, 93, 0.35);

    @media screen and (min-width: 481px) {
      padding: 20px 70px;
      height: calc(100svh - 100px);
    }
    @media screen and (min-width: 993px) {
      flex-direction: row;
      justify-content: space-between;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;

      @media screen and (min-width: 321px) {
        gap: 30px;
      }
      @media screen and (min-width: 481px) {
        gap: 10px;
      }
      @media screen and (min-width: 993px) {
        width: 55%;
        gap: 10px;
      }

      .tag {
        display: flex;
        width: fit-content;
        font-size: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        background-color: #4cd7f630;
        border: 1px solid #4cd7f6;
        color: white;
        @media screen and (min-width: 481px) {
          font-size: 16px;
        }
        @media screen and (min-width: 993px) {
          font-size: 17px;
        }
      }
      .title {
        margin: 0;
        font-size: 9vw;
        font-weight: 800;
        @media screen and (min-width: 481px) {
          font-size: 8vw;
        }
        @media screen and (min-width: 993px) {
          font-size: 4vw;
        }
        b {
          margin: 0;
          color: #d8b9ff;
          font-style: italic !important;
        }
      }
      .description {
        width: 100%;
        font-size: 5vw;
        @media screen and (min-width: 481px) {
          font-size: 3vw;
        }
        @media screen and (min-width: 993px) {
          font-size: 1.5vw;
        }
      }
      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media screen and (min-width: 993px) {
          width: 70%;
        }
        .main-button {
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 47%;
          height: 38px;
          border: 1px solid #33105d;
          background-color: #33105d;
          color: white;
          text-decoration: none;
          @media screen and (min-width: 481px) {
            border: 2px solid #33105d;
            height: 48px;
            font-size: 20px;
          }
          @media screen and (min-width: 993px) {
            background-color: transparent;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #33105d;
              z-index: -1;
              transition: transform 0.4s ease-in-out;
            }
            &:hover::before {
              transform: translateX(100%);
            }
          }
        }
        .secondary-button {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 47%;
          height: 38px;
          color: white;
          border: 1px solid #4cd7f6;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s ease-in-out;

          @media screen and (min-width: 481px) {
            border: 2px solid #4cd7f6;
            height: 48px;
            font-size: 20px;
          }
          @media screen and (min-width: 993px) {
            background-color: transparent;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 100%;
              width: 100%;
              height: 100%;
              background-color: #4cd7f6;
              z-index: -1;
              transition: transform 0.4s ease-in-out;
            }
            &:hover::before {
              transform: translateX(-100%);
            }
          }
        }
      }
    }
    .illustration {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      height: calc(100vh - 70px);
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 0;
      @media screen and (min-width: 993px) {
        position: unset;
        top: unset;
        left: unset;
        height: calc(80vh - 100px);
        width: 450px;
        border: 1px solid gray;
        margin: auto;
        transform: rotate(5deg);
        box-shadow:
          0 0 10px rgba(51, 16, 93, 0.6),
          0 0 20px rgba(51, 16, 93, 0.5),
          0 0 40px rgba(37, 4, 80, 0.45),
          0 0 80px rgba(37, 4, 80, 0.35);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.4);
        @media screen and (min-width: 993px) {
          filter: unset;
          width: 95%;
          height: 95%;
        }
      }
    }
  }
`;
