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

  }
`;
