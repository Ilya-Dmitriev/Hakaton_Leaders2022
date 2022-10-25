import { BaseLayOut } from '../layouts/BaseLayOut/BaseLayOut';
import { Home } from '../pages';
import { To } from 'react-router-dom';

interface PageRoute {
  element: React.ReactElement,
  path: string,
  key: React.Key,
  index?: boolean,
}

interface LayOutRoute {
  key: React.Key,
  layoutElement: React.ReactElement,
  routes: PageRoute[]
}

export const routesInLayOuts: LayOutRoute[] = [
  {
    key: 'base_layout',
    layoutElement: <BaseLayOut/>,
    routes: [
        {
        key: 'home',
        element: <Home/>,
        path: '/',
        index: true,
      }
    ]
  }
];
