import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About me page</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {/* If user had session */}
        {isAuthenticated && (
          <Link
            to="/profile"
            className="hover:text-blue-500 underline text-2xl"
          >
            Profile
          </Link>
        )}

        {/* Login logout */}
        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Link to="/login" className="hover:text-blue-500 underline text-2xl">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
