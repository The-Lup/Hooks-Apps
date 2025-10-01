export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('Function called');
  await new Promise((res) => setTimeout(res, 2000));
  console.log('Function rdy');

  return {
    id: id,
    name: 'JP',
    location: 'The Moon',
    role: 'Admin',
  };
};
