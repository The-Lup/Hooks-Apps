import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/app.router';
import { Toaster } from 'sonner';
import { UserContextProvider } from './context/UserContext';

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient layout-center text-white-default flex-col gap-4">
        <Toaster />
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};
