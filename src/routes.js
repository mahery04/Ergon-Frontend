import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Calendrier from './pages/Calendrier';
import Inventories from './pages/Inventories';
import Offres from './pages/Offres';
import Reservation from './pages/Reservation';
import PersonnelsLists from './pages/PersonnelsLists';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import Devis from './pages/Devis';
import DashboardApp from './pages/DashboardApp';
import NewEmployee from './pages/NewEmployee';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'personnels_lists', element: <PersonnelsLists /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
        { path: 'calendar', element: <Calendrier /> },
        { path: 'inventory', element: <Inventories /> },
        { path: 'offers', element: <Offres /> },
        { path: 'reservation', element: <Reservation /> },
        { path: 'devis', element: <Devis /> },
        { path: 'new_employee', element: <NewEmployee /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
