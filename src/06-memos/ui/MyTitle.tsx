import React from 'react';

interface TitleProps {
  title: string;
}

export const MyTitle = React.memo(({ title }: TitleProps) => {
  console.log('MyTitle re-render');
  return <div>{title}</div>;
});
