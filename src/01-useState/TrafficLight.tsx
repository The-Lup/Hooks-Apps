import { useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');

  const handleColorChange = (color: TrafficLightColor) => {
    setLight(() => {
      return color;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={`w-32 h-32 ${
            light === 'red' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === 'yellow' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === 'green' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>

        {/* Button to change the light state */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('red')}
          >
            Red
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('yellow')}
          >
            Yellow
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('green')}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};
