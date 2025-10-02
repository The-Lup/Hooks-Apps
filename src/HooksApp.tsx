import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TrafficLight } from './01-useState/TrafficLight';
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
import { PokePage } from './03-examples/PokePage';
import { FocusScreen } from './04-useRef/FocusScreen';
import { TasksApp } from './05-useReducer/TaskApp';
import { ScrambleWords } from './05-useReducer/ScrambleWords';

function HooksApp() {
  return (
    <BrowserRouter basename="/Hooks-Apps">
      {/* 🔹 Navbar  Tailwind */}
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Start
            </Link>
          </li>
          <li>
            <Link to="/traffic-light" className="hover:text-yellow-400">
              TrafficLight
            </Link>
          </li>
          <li>
            <Link to="/traffic-light-effect" className="hover:text-yellow-400">
              TrafficLight Effect
            </Link>
          </li>
          <li>
            <Link to="/traffic-light-hook" className="hover:text-yellow-400">
              TrafficLight Custom Hook
            </Link>
          </li>
          <li>
            <Link to="/poke-page" className="hover:text-yellow-400">
              PokePage
            </Link>
          </li>
          <li>
            <Link to="/focus-screen" className="hover:text-yellow-400">
              FocusScreen
            </Link>
          </li>
          <li>
            <Link to="/tasks-app" className="hover:text-yellow-400">
              TasksApp
            </Link>
          </li>
          <li>
            <Link to="/scramble-words" className="hover:text-yellow-400">
              ScrambleWords
            </Link>
          </li>
        </ul>
      </nav>

      {/* Principal Content */}
      <main className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  My hook demos 🚀
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Select a demo in the top navigation bar
                </p>
              </div>
            }
          />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route
            path="/traffic-light-effect"
            element={<TrafficLightWithEffect />}
          />
          <Route
            path="/traffic-light-hook"
            element={<TrafficLightWithHook />}
          />
          <Route path="/poke-page" element={<PokePage />} />
          <Route path="/focus-screen" element={<FocusScreen />} />
          <Route path="/tasks-app" element={<TasksApp />} />
          <Route path="/scramble-words" element={<ScrambleWords />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default HooksApp;
