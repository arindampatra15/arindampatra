import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Interest from './components/interest/interest';
import Myworks from "./components/myworks/myworks";
import Help from './components/help/help'
import Error from './components/error/error';

import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Help />
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element: <About/>
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/myinterest",
        element : <Interest />
      },
      {
        path : "/myworks",
        element : <Myworks />
      }
    ]
  }
])

export default App;
