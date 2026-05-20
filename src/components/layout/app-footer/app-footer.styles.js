import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  footer {
    width: 100%;
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

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
        }
        .description {
          width: 100%;
          text-align: center;
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

            li {
              border-bottom: 3px solid #33105d;
              padding: 5px;
              a {
                color: white;
                text-decoration: none;
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
      padding-top: 5px;
      border-top: 1px solid gray;
      p {
        font-size: 12px;
        color: gray;
      }
      nav {
        width: 100%;
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
            a {
              color: white;
              text-decoration: none;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
