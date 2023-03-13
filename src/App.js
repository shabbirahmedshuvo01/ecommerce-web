import './App.css';
import Home from './componentes/Home/Home';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './componentes/Autherntication/Login/Login';
import Singup from './componentes/Autherntication/Singup/Singup';
import Main from './Layout/Main';
import Products from './componentes/Products/Products';
import Dashboard from './componentes/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/home",
          element: <Home />
        },

        {
          path: "login",
          element: <Login />
        },

        {
          path: "singup",
          element: <Singup />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "dashboard",
          element: <PrivateRoute><Dashboard /></PrivateRoute>
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
