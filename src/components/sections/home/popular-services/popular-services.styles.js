import { css } from "lit"; // O la librería que estés usando

export const styles = css`
  .popular-services {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow:
      0 8px 28px rgba(37, 4, 80, 0.35),
      0 0 22px rgba(51, 16, 93, 0.35);

    @media screen and (min-width: 481px) {
      padding: 0 70px;
    }
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .nav-button {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(10, 0, 26, 0.6);
    border: 1px solid #4cd7f6;
    color: #4cd7f6;
    width: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    padding: 0;
  }

  .nav-button:hover {
    background: #4cd7f6;
    color: #0a001a;
    box-shadow: 0 0 15px rgba(76, 215, 246, 0.5);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .carousel-track {
    display: flex;
    width: 100%;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  app-card-link {
    flex: 0 0 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  .carousel-nav {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 20px 0;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #4cd7f6;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;

    &.active {
      background-color: #4cd7f6;
      transform: scale(1.2);
    }
  }
`;
