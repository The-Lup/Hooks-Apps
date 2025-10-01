import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { SubMyTitle } from './ui/MySubTitle';

// const handleMyapi = (value: string) => {
//   console.log('Api call' + value);
// };

export const MemoHook = () => {
  const [tittle, setTittle] = useState('Hello');
  const [subtittle, setSubTittle] = useState('World');

  const handleMyapi = useCallback(() => {
    console.log('Api call');
  }, []);

  return (
    <div className="bg-gradient layout-center text-white-default flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={tittle} />
      <SubMyTitle subtitle={subtittle} callMyApi={handleMyapi} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTittle('Never give up,' + new Date().getTime())}
      >
        Chance title
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubTittle('keep going,' + new Date().getTime())}
        onClick={() => setSubTittle('keep going')}
      >
        Change subtitle
      </button>
    </div>
  );
};
