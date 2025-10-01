import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyTask = (iterationNumber: number) => {
  console.time('Heavy_task_on');

  for (let i = 0; i < iterationNumber; i++) {
    console.log('Working...');
  }

  console.timeEnd('Heavy_task_on');

  return `${iterationNumber} iterations done`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(10_000);
  const { counter: counter2, increment: increment2 } = useCounter(5_000);

  const myHeavyValue = useMemo(() => heavyTask(counter), [counter]);

  return (
    <div className="bg-gradient layout-center text-white-default flex-col gap-4">
      <h1>Memo - {myHeavyValue}</h1>
      <hr />

      <h4>Counter: {counter} </h4>
      <h4>Counter: {counter2} </h4>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment2}
      >
        +1 al counter2
      </button>
    </div>
  );
};
