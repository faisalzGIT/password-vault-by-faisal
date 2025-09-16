import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HOME from './components/Home';
import VAULT from './components/Vault'
import CODER from './components/Coder';
import ABOUT from './components/About';
import Layout from './components/Layout';


function App() {
    const router = createBrowserRouter([
        {   
            path: "/",
            element:<Layout />,
            children: [
                {index: true, element: <HOME />},
                {path: "/vault", element: <VAULT />},
                {path: "/coder", element: <CODER />},
                {path: "/about", element: <ABOUT />},
            ]
        }
    ])

  return (
        <>  
            <RouterProvider router={router} />
        </>
  )
}

export default App
