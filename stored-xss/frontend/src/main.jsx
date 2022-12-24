import { StrictMode ,Suspense } from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import routes from "~react-pages";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "@/index.css";


const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
