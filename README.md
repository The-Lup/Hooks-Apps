# Hooks-Apps

Example repository for learning and practicing some React hooks.
You can check the pages here: https://the-lup.github.io/Hooks-Apps/

## 📦 Description

This project contains simple applications built with **React**, **TypeScript**, and **Vite**, focused on demonstrating the use of the following hooks:

- `useState` – for local state management.
- `useRef` – for referencing DOM elements and persistent values.
- `useEffect` – for executing side effects when components mount, update, or unmount.
- `useReducer` – for managing more complex state logic in a predictable way.

## 🚀 Technologies

- **React** – version 19.1.0
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **ESLint**
- **Shadcn/UI** – for prebuilt, accessible, and customizable UI components

## 🛠 Installation

```bash
git clone https://github.com/The-Lup/Hooks-Apps.git
cd Hooks-Apps
npm install
npm run dev
```

## 🎨 Hook Mini Demos

### 1️⃣ useState

Simple counter using `useState`:

```tsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment: {count}</button>;
```

### 2️⃣ useRef

Reference an input to focus it automatically:

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

### 3️⃣ useEffect

Example of an effect that runs when the component mounts:

```tsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

### 4️⃣ useReducer

Simple counter using `useReducer`:

```tsx
const [count, dispatch] = useReducer(
  (state: number, action: { type: 'inc' | 'dec' }) =>
    action.type === 'inc' ? state + 1 : state - 1,
  0
);

<button onClick={() => dispatch({ type: 'inc' })}>Increment: {count}</button>;
```

## 🧪 Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Generate an optimized production build.
- `npm run lint` – Run ESLint to check code quality.
- `npm run preview` – Preview the production build.

## 📄 License

MIT
