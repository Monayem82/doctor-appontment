import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import { router } from './Routers/Routers.jsx';
import DoctorsProviders from './context/DoctorsProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoctorsProviders>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </DoctorsProviders>
  </StrictMode>,
)
