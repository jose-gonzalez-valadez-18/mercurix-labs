import { Router } from "@vaadin/router";

import "../pages/home/home";
import "../pages/services/services";

export const initRouter = (outlet) => {
  const router = new Router(outlet);

  router.setRoutes([
    {
      path: "/",
      component: "page-home",
    },
    {
      path: "/services",
      component: "page-services",
    },
  ]);

  return router;
};
