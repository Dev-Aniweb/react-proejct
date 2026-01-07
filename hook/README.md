# React Hooks

This repository contains examples of **React Hooks** including `useState`, `useEffect`, `useMemo`, and `useCallback`.  
It is intended as a simple cheat sheet and reference for learning React Hooks.

---

## Hooks Overview

| Hook          | Definition                                                                 | Syntax / Example |
|---------------|---------------------------------------------------------------------------|----------------|
| **useState**  | Creates a state variable in a functional component.                       | `const [state, setState] = useState(initialValue);`<br>`const [count, setCount] = useState(0);` |
| **useEffect** | Performs side effects like API calls, DOM updates, or event listeners.    | `useEffect(() => { console.log("Updated"); }, [count]);` |
| **useMemo**   | Memoizes expensive calculations so they only recompute when dependencies change. | `const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);`<br>`const expensive = useMemo(() => count*1000, [count]);` |
| **useCallback** | Memoizes functions to prevent unnecessary recreation on every render. Useful for optimizing child components. | `const handleClick = useCallback(() => { console.log("Clicked"); }, [count]);` |



