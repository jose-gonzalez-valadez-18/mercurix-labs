import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .popular-services {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-sizing: border-box;
    box-shadow: 0 8px 28px rgba(37, 4, 80, 0.35);

    @media screen and (min-width: 481px) {
      padding: 40px 70px;
    }

    .carrousel-container {
      width: 100%;
      position: relative;
      overflow: hidden;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #4cd7f6;
        color: #4cd7f6;
        position: absolute;
        top: 50%;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #00000080;
        z-index: 4;
        @media screen and (min-width: 481px) {
          width: 60px;
          height: 60px;
          font-size: 20px;
          top: 50%;
        }
        @media screen and (min-width: 993px) {
          display: none;
        }
      }
      .prev {
        left: 0;
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      .next {
        right: 0;
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      .carrousel-wrapper {
        width: 100%;
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        @media screen and (min-width: 993px) {
          gap: 10px;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        &::-webkit-scrollbar {
          display: none;
        }

        app-card-link {
          min-width: 100%;
          flex: 0 0 100%;
          scroll-snap-align: start;
          @media screen and (min-width: 993px) {
            min-width: 370px;
            flex: 0 0 30%;
          }
        }
      }
    }
  }
`;
