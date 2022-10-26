import { BaseLayOut } from "../layouts/BaseLayOut/BaseLayOut";
import { Registration } from "../pages";

interface PageRoute {
  element: React.ReactElement;
  path: string;
  key: React.Key;
  index?: boolean;
}

interface LayOutRoute {
  key: React.Key;
  layoutElement: React.ReactElement;
  routes: PageRoute[];
}

export const routesInLayOuts: LayOutRoute[] = [
  {
    key: "base_layout",
    layoutElement: <BaseLayOut />,
    routes: [
      {
        key: "home",
        element: <Registration />,
        path: "/",
        index: true,
      },
    ],
  },
];
