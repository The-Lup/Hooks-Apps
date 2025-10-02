import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { SkipForward, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Shuffle the array so it’s always random
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Shuffle the letters of the word
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const ScrambleWords = () => {
  const [words, setWords] = useState(shuffleArray(GAME_WORDS));

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(currentWord));
  const [guess, setGuess] = useState('');
  const [points, setPoints] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);
  const [maxAllowErrors] = useState(3);

  const [skipCounter, setSkipCounter] = useState(0);
  const [maxSkips] = useState(3);

  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (guess === currentWord) {
      const newWords = words.slice(1);

      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
      });

      setPoints(points + 1);
      setGuess('');
      setWords(newWords);
      setCurrentWord(newWords[0]);
      setScrambledWord(scrambleWord(newWords[0]));
      return;
    }

    setErrorCounter(errorCounter + 1);
    setGuess('');

    if (errorCounter + 1 >= maxAllowErrors) {
      setIsGameOver(true);
    }
  };

  const handleSkip = () => {
    if (skipCounter >= maxSkips) return;

    const updatedWords = words.splice(1);

    setSkipCounter(skipCounter + 1);
    setWords(updatedWords);
    setCurrentWord(updatedWords[0]);
    setScrambledWord(scrambleWord(updatedWords[0]));
    setGuess('');
  };

  const handlePlayAgain = () => {
    const newArray = shuffleArray(GAME_WORDS);

    setPoints(0);
    setErrorCounter(0);
    setGuess('');
    setWords(newArray);
    setCurrentWord(newArray[0]);
    setIsGameOver(false);
    setSkipCounter(0);
    setScrambledWord(scrambleWord(newArray[0]));
  };

  //! If there are no more words, show game over screen
  if (words.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Scrambled Words
          </h1>
          <p className="text-gray-600">No words available to play</p>
          <br />
          <div>Score: {points}</div>
          <br />
          <div>Errors: {errorCounter}</div>
          <br />
          <div>Skips: {skipCounter}</div>
          <br />
          <Button onClick={handlePlayAgain}>Play again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Scrambled Words
          </h1>
          <p className="text-gray-600">
            Unscramble the letters to find the word!
          </p>
        </div>

        {/* Main Game Card */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <CardContent className="p-8">
            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center justify-center gap-2">
                Scrambled Word
                {isGameOver && (
                  <span className="text-red-500 text-xl"> {currentWord}</span>
                )}
              </h2>

              <div className="flex justify-center gap-2 mb-6">
                {scrambledWord.split('').map((letter, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <form onSubmit={handleGuessSubmit} className="mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="guess"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Guess the word
                  </label>
                  <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) =>
                      setGuess(e.target.value.toUpperCase().trim())
                    }
                    placeholder="Enter your guess..."
                    className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  disabled={!guess.trim() || isGameOver}
                >
                  Submit Guess
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {points} / {GAME_WORDS.length}
                </div>
                <div className="text-sm text-green-700 font-medium">Points</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 text-center border border-red-200">
                <div className="text-2xl font-bold text-red-600">
                  {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm text-red-700 font-medium">Errors</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleSkip}
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                disabled={isGameOver || skipCounter >= maxSkips}
              >
                <SkipForward className="w-4 h-4" />
                Skip ({skipCounter} / {maxSkips})
              </Button>
              <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="border-2 border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Play again
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Challenge yourself with scrambled words!
            <br />
            <br />
            {words.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};
