import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  footer {
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: black;
    box-shadow:
      0 -8px 28px rgba(37, 4, 80, 0.35),
      0 -0px 22px rgba(51, 16, 93, 0.35);
    @media screen and (min-width: 1024px) {
      padding: 20px 70px;
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      @media screen and (min-width: 1024px) {
        flex-direction: row;
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;

          @media screen and (min-width: 768px) {
            width: 40%;
          }

          @media screen and (min-width: 1024px) {
            width: 60%;
          }
        }
        .description {
          width: 100%;
          text-align: center;
          @media screen and (min-width: 768px) {
            font-size: 18px;
            width: 80%;
          }
        }
      }
      .connect {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        nav {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0;
          ul {
            padding: 0;
            list-style: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            @media screen and (min-width: 1024px) {
              flex-direction: column;
              width: fit-content;
              align-items: center;
              gap: 20px;
              margin: auto;
            }

            li {
              border-bottom: 3px solid #33105d;
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
                color: white;
                text-decoration: none;
                @media screen and (min-width: 768px) {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
      .newsletter {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        form {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          input {
            width: calc(100% - 47px);
            height: 38px;
            border: 1px solid #404041;
            padding-left: 15px;
            background-color: #2a2a2b;
            outline: none; /* Elimina el borde azul por defecto del navegador */

            &:focus {
              border: 2px solid #2563eb;
            }
          }
          button {
            width: 42px;
            height: 42px;
            background-color: #33105d;
            border: none;
            font-size: 20px;
          }
        }
      }
    }
    .copyright {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 5px;
      border-top: 1px solid gray;
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }
      p {
        font-size: 12px;
        color: gray;
        text-align: center;
        @media screen and (min-width: 768px) {
          font-size: 18px;
        }
        @media screen and (min-width: 1024px) {
          width: 60%;
          text-align: left;
        }
      }
      nav {
        width: 100%;
        @media screen and (min-width: 1024px) {
          width: 40%;
        }
        ul {
          width: 100%;
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 0;
          li {
            border-bottom: 3px solid #33105d;
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
              color: white;
              text-decoration: none;
              font-size: 12px;
              @media screen and (min-width: 768px) {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
`;
