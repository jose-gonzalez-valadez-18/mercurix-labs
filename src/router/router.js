import { Router } from "@vaadin/router";

import "../pages/home/home";

export const initRouter = (outlet) => {
  const router = new Router(outlet);

  router.setRoutes([
    {
      path: "/",
      component: "page-home",
    },
  ]);

  return router;
};
