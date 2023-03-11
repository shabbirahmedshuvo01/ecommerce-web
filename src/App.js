import './App.css';
import Home from './componentes/Home/Home';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './componentes/Autherntication/Login/Login';
import Singup from './componentes/Autherntication/Singup/Singup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "singup",
      element: <Singup />
    }

  ])

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
