import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
//components
import { Counter } from '../pages/counter/Counter';

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    { path: 'counter', element: <Counter /> }
  ]);
}

//IMPORT COMPONENTS

const Home = Loadable(lazy(() => import('../pages/home/home')));
