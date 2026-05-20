import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .hero-main {
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    padding: 20px;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .illustration {
      width: 100%;
      aspect-ratio: 1/1;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
