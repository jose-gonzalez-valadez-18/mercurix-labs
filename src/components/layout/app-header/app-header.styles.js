import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .header-space {
    width: 100%;
    height: 70px;
    @media screen and (min-width: 768px) {
      height: 100px;
    }
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 1000;
    background-color: black;
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
      0 8px 28px rgba(37, 4, 80, 0.35),
      0 0 22px rgba(51, 16, 93, 0.35);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      height: 100px;
      padding: 0 70px;
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      picture {
        height: 100%;
        display: flex;
        align-items: center;
        img {
          height: 75%;
          width: auto;
        }
      }
    }

    #hamburguer-button {
      height: 50%;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border: none;
      background-color: #33105d;
      color: #f0e7fa;
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
    .primary-button {
      width: 100px;
      height: 50%;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
      color: #f0e7fa;
      transition: all 0.4s ease-in-out;
      border: 2px solid #33105d;
      background-color: transparent;
      position: relative;
      overflow: hidden;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

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

      @media screen and (min-width: 1024px) {
        width: 15%;
        cursor: pointer;
        font-size: 15px;
        &:hover::before {
          transform: translateX(100%);
        }
      }
    }
    nav {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      height: 0;
      background-color: black;
      transition: all 0.4s ease;
      overflow: hidden;
      display: flex;
      align-items: center;
      z-index: 99999;

      @media screen and (min-width: 768px) {
        top: 100px;
        right: 0;
        left: auto;
        width: 0;
        height: calc(100dvh);
      }

      @media screen and (min-width: 1024px) {
        position: unset;
        top: unset;
        left: unset;
        height: 90%;
        width: 50%;
      }

      &.active {
        height: calc(100dvh);
        @media screen and (min-width: 768px) {
          width: 50%;
          height: calc(100dvh);
        }
      }

      ul {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        padding: 0;
        margin: auto;
        @media screen and (min-width: 1024px) {
          height: 90%;
          flex-direction: row;
          justify-content: space-between;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 3px solid #33105d;
          list-style: none;
          padding: 5px;

          @media screen and (min-width: 1024px) {
            border-bottom: 3px solid #33105d;
            position: relative;
            padding: 10px 15px;
            cursor: pointer;

            &::before,
            &::after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border: 3px solid transparent;
              box-sizing: border-box;
            }

            &::before {
              bottom: -3px;
              left: 0;
            }

            &::after {
              top: 0;
              right: 0;
            }

            &:hover::before {
              width: 100%;
              height: 100%;
              border-bottom-color: #33105d;
              border-right-color: #33105d;
              transition:
                width 0.1s ease-out,
                height 0.1s ease-out 0.1s;
            }

            &:hover::after {
              width: 100%;
              height: 100%;
              border-top-color: #33105d;
              border-left-color: #33105d;
              transition:
                border-color 0s ease-out 0.2s,
                width 0.1s ease-out 0.2s,
                height 0.1s ease-out 0.3s;
            }
          }
          a {
            text-decoration: none;
            color: white;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
