import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .what-sets-us-apart {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-sizing: border-box;
    box-shadow: 0 8px 28px rgba(37, 4, 80, 0.35);

    @media screen and (min-width: 481px) {
      padding: 40px 70px;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      @media screen and (min-width: 481px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
      }
      @media screen and (min-width: 993px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 60px;
      }
      .card {
        position: relative;
        width: 90%;
        background-color: #181818;
        border-radius: 10px;
        padding: 20px;
        border-left: 4px solid #33105d;
        overflow: hidden;

        @media screen and (min-width: 993px) {
          background-color: #33105d;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #181818;
            z-index: 1;
            transition: transform 0.4s ease-in-out;
          }
          &:hover::before {
            transform: translateX(100%);
          }
        }
        span {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 40px;
        }
        h3,
        .description {
          position: relative;
          z-index: 2;
        }
      }
    }
  }
`;
