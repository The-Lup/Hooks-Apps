import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

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

export const TrafficLightWithEffect = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-thin mb-8">
        Stoplight with useEffect
      </h1>

      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-white text-xl"> Countdown: {countdown}</h2>

        {/* Stoplight */}
        <div className="flex flex-col items-center space-y-4">
          {(['red', 'yellow', 'green'] as TrafficLightColor[]).map((c) => (
            <div
              key={c}
              className={`w-32 h-32 rounded-full transition-colors duration-500 ${
                light === c ? colors[c] : 'bg-gray-500'
              }`}
            ></div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-32 h-3 bg-gray-700 rounded-full mt-4 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ${colors[light]}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
