import { svg } from "lit";

const navegacion = {
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
};

const acciones = {
  close: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.3-6.29 1.41 1.41Z"/></svg>
  `,
};

const comunicacion = {
  sendMail: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M3 4L21 12L3 20L6 13L14 12L6 11L3 4Z"/></svg>
  `,
};

const multimedia = {
  lightning: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M13 2L4 14H11L10 22L20 9H13L13 2Z"/></svg>
  `,
};

const ecommercePagos = {
  affordablePrices: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2C7.02944 2 3 6.02944 3 11C3 15.9706 7.02944 20 12 20C16.9706 20 21 15.9706 21 11C21 6.02944 16.9706 2 12 2ZM13 6V7.07089C14.3923 7.27895 15.5 8.38663 15.5 9.75H13.5C13.5 9.33579 13.1642 9 12.75 9H11.25C10.8358 9 10.5 9.33579 10.5 9.75C10.5 10.1642 10.8358 10.5 11.25 10.5H12.75C14.2688 10.5 15.5 11.7312 15.5 13.25C15.5 14.6134 14.3923 15.7211 13 15.9291V17H11V15.9291C9.60771 15.7211 8.5 14.6134 8.5 13.25H10.5C10.5 13.6642 10.8358 14 11.25 14H12.75C13.1642 14 13.5 13.6642 13.5 13.25C13.5 12.8358 13.1642 12.5 12.75 12.5H11.25C9.73122 12.5 8.5 11.2688 8.5 9.75C8.5 8.38663 9.60771 7.27895 11 7.07089V6H13Z"/></svg>
  `,
};

const tecnologia = {
  smartphone: svg`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em"><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
  `,
  screenCode: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V17C21 18.1046 20.1046 19 19 19H13V21H16V23H8V21H11V19H5C3.89543 19 3 18.1046 3 17V5ZM5 5V17H19V5H5ZM9.70711 9.29289L8.29289 10.7071L9.58579 12L8.29289 13.2929L9.70711 14.7071L12.4142 12L9.70711 9.29289ZM14.2929 9.29289L11.5858 12L14.2929 14.7071L15.7071 13.2929L14.4142 12L15.7071 10.7071L14.2929 9.29289Z"/></svg>
  `,
};

const archivosDocumentos = {
  documentation: svg`
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="1em"
    height="1em"
    aria-hidden="true"
  >
    <path d="M8 2H14L19 7V20C19 21.1 18.1 22 17 22H8C6.9 22 6 21.1 6 20V4C6 2.9 6.9 2 8 2Z" />
    <path d="M14 2V7H19" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
`,
};

const socialReacciones = {
  social: svg`
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="1em"
    height="1em"
    aria-hidden="true"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
`,
  like: svg`
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="1em"
    height="1em"
    aria-hidden="true"
  >
    <path d="M7 10V21H3V10H7Z" />
    <path d="M21 11C21 9.9 20.1 9 19 9H14L15 4V3C15 2.45 14.55 2 14 2L8 10V21H18C18.8 21 19.5 20.5 19.8 19.7L21 12C21 11.7 21 11.3 21 11Z" />
  </svg>
`,
};

const sistemaEstado = {
  checkCircle: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.5858 15.4142L7.29289 12.1213L8.70711 10.7071L10.5858 12.5858L15.2929 7.87868L16.7071 9.29289L10.5858 15.4142Z"/></svg>
  `,
};

const seguridad = {
  lock: svg`
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M17 9H16V7C16 4.243 13.757 2 11 2C8.243 2 6 4.243 6 7V9H5C3.897 9 3 9.897 3 11V20C3 21.103 3.897 22 5 22H17C18.103 22 19 21.103 19 20V11C19 9.897 18.103 9 17 9ZM8 7C8 5.346 9.346 4 11 4C12.654 4 14 5.346 14 7V9H8V7ZM11 17C10.172 17 9.5 16.328 9.5 15.5C9.5 14.672 10.172 14 11 14C11.828 14 12.5 14.672 12.5 15.5C12.5 16.328 11.828 17 11 17Z"/></svg>
  `,
};

const redesSociales = {
 githubAlt: svg`
  <svg
    viewBox="0 0 15 15"
    fill="currentColor"
    width="1em"
    height="1em"
    aria-hidden="true"
  >
    <g transform="translate(-1 -2.2) scale(1.15)">
      <path
        d="M9 4.25
        c-1.07-.24-2.22-.24-3.25.04
        -.42-.26-1.07-.49-1.69-.52
        -.22.58-.3 1.2-.1 1.78
        -.23.25-.41.53-.54.84
        -.34 1.02-.25 2.32.48 3.1
        .26.27.61.49 1 .67
        .4.18.96.29 1.62.34
        -.44.21-.75.34-.87.8
        -.49.33-1.1.25-1.53-.1
        -.34-.26-.5-.71-.88-.88
        -.02-.03-.1-.05-.23-.05
        -.12-.01-.23.03-.3.1
        -.03.04-.03.07.01.11
        .29.24.56.49.73.79
        .16.33.32.56.48.72
        .47.31 1.1.48 1.64.28
        -.06.39.11 1-.02 1.34
        -.04.1-.12.19-.21.26
        -.08.08-.33.18-.28.29
        .02.06.11.09.25.1
        .32-.01.64-.14.83-.39
        .07-.09.1-.21.1-.35v-1.48
        c0-.17.03-.29.11-.36
        .07-.07.15-.12.23-.15v1.95
        c0 .17-.02.31-.05.43
        -.02.12-.05.21-.08.25
        -.05.09-.16.18-.16.29
        0 .03.02.05.06.06
        .32-.02.68-.2.82-.46
        .11-.22.16-.45.16-.68v-1.92
        h.4v1.92
        c0 .24.05.46.16.68
        .11.22.29.36.54.42
        .14.03.23.05.28.04
        .05-.01.07-.03.06-.06
        -.02-.11-.09-.2-.15-.29
        -.08-.11-.12-.34-.12-.68v-1.95
        c.08.03.17.08.24.15
        .08.07.11.19.11.36v1.48
        c0 .14.03.26.1.35
        .2.25.5.39.82.39
        .14-.01.23-.04.25-.1
        .03-.05.01-.1-.05-.13
        -.06-.04-.14-.09-.23-.16
        -.09-.07-.16-.16-.21-.26
        -.06-.62 0-1.29-.05-1.92
        -.08-.69-.35-.92-.88-1.18
        .63-.05 1.14-.17 1.55-.34
        1.2-.58 1.53-1.5 1.55-2.7
        -.02-.79-.25-1.46-.77-1.98
        .07-.27.09-.56.06-.87
        -.03-.3-.1-.57-.19-.81
        -.45.03-.82.12-1.12.27
        -.3.16-.52.29-.65.4z"
      />

     <path
  d="M3.9 6.8L1.6 6.3
     M3.9 7.6H1.5
     M3.9 8.4L1.6 8.9
     M11.1 6.8L13.4 6.3
     M11.1 7.6H13.5
     M11.1 8.4L13.4 8.9"
  fill="none"
  stroke="currentColor"
  stroke-width="0.5"
  stroke-linecap="round"
/>
    </g>
  </svg>
`,
};

export const icons = {
  ...navegacion,
  ...acciones,
  ...comunicacion,
  ...multimedia,
  ...ecommercePagos,
  ...tecnologia,
  ...archivosDocumentos,
  ...socialReacciones,
  ...sistemaEstado,
  ...seguridad,
  ...redesSociales,
};

export const iconCategories = {
  Navegación: navegacion,
  "Usuario / Perfil": {},
  Comunicación: comunicacion,
  "Archivos y Documentos": archivosDocumentos,
  Multimedia: multimedia,
  Acciones: acciones,
  "E-commerce / Pagos": ecommercePagos,
  "Transporte y Viajes": {},
  Tecnología: tecnologia,
  "Negocios / Analytics": {},
  "Social / Reacciones": socialReacciones,
  "Sistema / Estado": sistemaEstado,
  Salud: {},
  Educación: {},
  Entretenimiento: {},
  Seguridad: seguridad,
  Configuración: {},
  "Ubicación / Mapas": {},
  "Tiempo / Clima": {},
  Finanzas: {},
  Productividad: {},
  Herramientas: {},
  Deportes: {},
  "Comida y Bebidas": {},
  Hogar: {},
  Vehículos: {},
  Compras: {},
  Eventos: {},
  Turismo: {},
  "Redes Sociales": redesSociales,
};
