import React from 'react';

interface SubTitleProps {
  subtitle: string;
  callMyApi: () => void;
  // callMyApi: (value: string) => void;
}

export const SubMyTitle = React.memo(
  ({ subtitle, callMyApi }: SubTitleProps) => {
    console.log('Sub MyTitle re-render');
    return (
      <>
        <h6>{subtitle}</h6>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer w-max"
          onClick={callMyApi}
          // onClick={() => callMyApi(subtitle)}
        >
          Call a funtion
        </button>
      </>
    );
  }
);
