# Hooks-Apps

Example repository for learning and practicing some React hooks.

## 📦 Description

This project contains simple applications built with **React**, **TypeScript**, and **Vite**, focused on demonstrating the use of the following hooks:

* `useState` – for local state management.
* `useRef` – for referencing DOM elements and persistent values.
* `useEffect` – for executing side effects when components mount, update, or unmount.

## 🚀 Technologies

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **ESLint**

## 🛠 Installation

```bash
git clone https://github.com/The-Lup/Hooks-Apps.git
cd Hooks-Apps
npm install
npm run dev
```



## 📁 Project Structure

```plaintext
Hooks-Apps/
├── public/
├── src/
│   ├── components/    # Reusable components
│   ├── hooks/         # Custom hooks if any
│   ├── App.tsx        # Main component
│   └── main.tsx       # Entry point
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🎨 Hook Mini Demos

### 1️⃣ useState

Simple counter using `useState`:

```tsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment: {count}
</button>
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



> You can replace these placeholder images with actual screenshots of your components for a more attractive README.

## 🧪 Available Scripts

* `npm run dev` – Start the development server.
* `npm run build` – Generate an optimized production build.
* `npm run lint` – Run ESLint to check code quality.
* `npm run preview` – Preview the production build.

## 🤝 Contributing

If you want to add examples with other hooks or improve the documentation:

1. Fork the repository.
2. Create a branch (`git checkout -b feature/new-hook`).
3. Commit your changes and push your branch.
4. Open a Pull Request.

## 📄 License

MIT
