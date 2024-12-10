import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Users from '../pages/Users';
import Movie from '../pages/Movie';
import TvSeries from '../pages/Tv-series';
import BookMark from '../pages/BookMark';
import Error from '../pages/Error';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      errorElement:<Error/>,
    },

    {
        path: "/about",
        element:<About/>,
      },

      {
        path: "/users",
        element:<Users/>,
      },

      {
        path: "/movie",
        element:<Movie/>,
        errorElement:<Error/>,
      },

      {
        path: "/tv-series",
        element:<TvSeries/>,
        errorElement:<Error/>,

      },

      {
        path: "/bookMark",
        element:<BookMark/>,
        errorElement:<Error/>,

      },

  ]);