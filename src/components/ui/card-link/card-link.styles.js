import { css } from "lit";

export const styles = css`
  .card-link {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #181818;
    border-radius: 10px;
    border: 1px solid #33105d;

    .image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      aspect-ratio: 2/1;
      margin: 0 auto;
      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 10px;
      }
      .tag {
        position: absolute;
        top: 10px;
        right: -30px;
        transform: translateX(-50%);
        color: white;
        background-color: black;
        border: 1px solid white;
        padding: 5px 15px;
        border-radius: 50px;
        font-size: 10px;
      }
    }
    .text-container {
      width: 90%;
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
      }
      .tecnology {
        background-color: #a855f71a;
        padding: 05%;
        border-radius: 10px;
        font-size: 14px;
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
      p {
        margin: 0;
      }
      span {
        display: flex;
      }
    }
  }
`;
