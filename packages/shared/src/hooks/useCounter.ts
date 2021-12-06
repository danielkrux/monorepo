import { useState } from 'react';

export default function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const incrementByOne = () => setCount((state) => state + 1);
  const reduceByOne = () => setCount((state) => state - 1)

  return {
    count,
    setCount,
    incrementByOne,
    reduceByOne
  }
}
