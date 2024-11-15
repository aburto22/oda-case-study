import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layout';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Index />
      </MainLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
