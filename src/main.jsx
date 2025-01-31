import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import ListedBook from './components/ListedBook/ListedBook';
import PagesRead from './components/PagesRead/PagesRead';
import Details from './components/Details/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/book.json')
      },
      {
        path: "/pages",
        element: <PagesRead></PagesRead>
      },
      {
        path: "/book/:bookId",
        element: <Details></Details>,
        loader: () => fetch('../book.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


//  {
//   path: "",
//   element: 
// },