import { Suspense, use } from 'react';
import { getUserAction, type User } from './actions/get-user.actions';

interface Props {
  userId: number;
}

export const ClientInfo = ({ userId }: Props) => {
  const userPromise = getUserAction(userId);
  return (
    <Suspense
      fallback={
        <div className="bg-gradient layout-center text-white-default flex-col gap-4">
          Loading...
        </div>
      }
    >
      <UserDetails userPromise={userPromise} />
    </Suspense>
  );
};

// 🔹 Componente separado que usa `use`
const UserDetails = ({ userPromise }: { userPromise: Promise<User> }) => {
  const user = use(userPromise);

  return (
    <div className="bg-gradient layout-center text-white-default flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>
      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};
