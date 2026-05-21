import { svg } from "lit";

export const icons = {
  search: svg`
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.45l4.44 4.44-1.42 1.42-4.44-4.44A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/>
    </svg>
  `,
  menu: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
    />
  </svg>
`,
  close: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.3-6.29 1.41 1.41Z"
    />
  </svg>
`,
  sendMail: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M3 4L21 12L3 20L6 13L14 12L6 11L3 4Z"
    />
  </svg>
`,
  arrowRight: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 4L20 12L12 20V14H4V10H12V4Z"
    />
  </svg>
`,
  arrowLeft: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 20L4 12L12 4V10H20V14H12V20Z"
    />
  </svg>
`,
  screenCode: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V17C21 18.1046 20.1046 19 19 19H13V21H16V23H8V21H11V19H5C3.89543 19 3 18.1046 3 17V5ZM5 5V17H19V5H5ZM9.70711 9.29289L8.29289 10.7071L9.58579 12L8.29289 13.2929L9.70711 14.7071L12.4142 12L9.70711 9.29289ZM14.2929 9.29289L11.5858 12L14.2929 14.7071L15.7071 13.2929L14.4142 12L15.7071 10.7071L14.2929 9.29289Z"
    />
  </svg>
`,
  affordablePrices: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2ZM13 6V7.07089C14.3923 7.27895 15.5 8.38663 15.5 9.75H13.5C13.5 9.33579 13.1642 9 12.75 9H11.25C10.8358 9 10.5 9.33579 10.5 9.75C10.5 10.1642 10.8358 10.5 11.25 10.5H12.75C14.2688 10.5 15.5 11.7312 15.5 13.25C15.5 14.6134 14.3923 15.7211 13 15.9291V17H11V15.9291C9.60771 15.7211 8.5 14.6134 8.5 13.25H10.5C10.5 13.6642 10.8358 14 11.25 14H12.75C13.1642 14 13.5 13.6642 13.5 13.25C13.5 12.8358 13.1642 12.5 12.75 12.5H11.25C9.73122 12.5 8.5 11.2688 8.5 9.75C8.5 8.38663 9.60771 7.27895 11 7.07089V6H13Z"
    />
  </svg>
`,
  checkCircle: svg`
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.5858 15.4142L7.29289 12.1213L8.70711 10.7071L10.5858 12.5858L15.2929 7.87868L16.7071 9.29289L10.5858 15.4142Z"
    />
  </svg>
`,
};
