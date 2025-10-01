export interface ScrambleState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  totalWords: number;
  words: string[];
}

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

export const getInitialState = (): ScrambleState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffleWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWords[0]),
    skipCounter: 0,
    totalWords: shuffleWords.length,
    words: shuffleWords,
  };
};

export type ScrambleActions =
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'SKIP_WORD' }
  | { type: 'PLAY_AGAIN'; payload: ScrambleState };

export const scrambleReducer = (
  state: ScrambleState,
  action: ScrambleActions
): ScrambleState => {
  switch (action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };
    case 'CHECK_ANSWER': {
      if (state.currentWord === state.guess) {
        const newWords = state.words.slice(1);

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
        };
      }

      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }

    case 'SKIP_WORD': {
      if (state.skipCounter >= state.maxSkips) return state;

      const updatedWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: updatedWords[0],
        scrambledWord: scrambleWord(updatedWords[0]),
        guess: '',
      };
    }

    case 'PLAY_AGAIN': {
      return action.payload;
    }

    default:
      return state;
  }
};
