import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Home from "@/pages/home.vue";
import Coletores from "@/pages/Coletores.vue";
import Impressoras from "@/pages/Impressoras.vue";
import Leitores from "@/pages/Leitores.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "coletores",
        name: "Coletores",
        component: Coletores,
      },
      {
        path: "impressoras",
        name: "Impressoras",
        component: Impressoras,
      },
      {
        path: "Leitores",
        name: "Leitores",
        component: Leitores,
      },
    ],
  },
];

export default routes;
