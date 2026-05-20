import { css } from "lit";

export const styles = css`
  .section-title {
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 481px) {
      padding: 50px 70px;
    }
    h2 {
      width: fit-content;
      margin: 0;
      padding: 0;
      padding-right: 10px;
      border-bottom: 3px solid #33105d;
      text-align: center;
      font-size: 20px;
      @media screen and (min-width: 481px) {
        font-size: 40px;
      }
    }
  }
`;
