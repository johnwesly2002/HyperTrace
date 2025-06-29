import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './ContextApi/ContextApi.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const gureyClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={gureyClient}>
   <ContextProvider>
        <App />
  </ContextProvider>
  </QueryClientProvider>,
)
