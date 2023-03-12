import './App.css';
import Home from './componentes/Home/Home';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './componentes/Autherntication/Login/Login';
import Singup from './componentes/Autherntication/Singup/Singup';
import Main from './Layout/Main';
import Products from './componentes/Products/Products';

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
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
