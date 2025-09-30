import { useEffect, useState } from 'react';

type TrafficLightColor = 'red' | 'yellow' | 'green';

const durations: Record<TrafficLightColor, number> = {
  red: 5,
  green: 4,
  yellow: 2,
};

const nextLight: Record<TrafficLightColor, TrafficLightColor> = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(durations['red']);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          const newLight = nextLight[light];
          setLight(newLight);
          return durations[newLight];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [light]);

  const progress =
    ((durations[light] - countdown + 1) / durations[light]) * 100;

  return { light, countdown, progress };
};
