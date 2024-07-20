import { useCallback, useState } from "react";

export default function useCount(initialCount: number) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = useCallback((maxCount: number) => {
    setCount((count) => {
      if (count < maxCount) {
        return count + 1;
      }
      return count;
    });
  }, []);

  const decrement = useCallback((minCount: number) => {
    setCount((count) => {
      if (count > minCount) {
        return count - 1;
      }
      return count;
    });
  }, []);

  return { count, increment, decrement, setCount };
}
