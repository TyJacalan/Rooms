import { useState, useEffect, useRef } from "react";

const useDebouncedFetch = (
  fetchFunction,
  debounceTime = 1000,
  dependencies = []
) => {
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleDebouncedFetch = () => {
      setIsLoading(true);
      clearTimeout(intervalRef.current);
      intervalRef.current = setTimeout(async () => {
        await fetchFunction();
        setIsLoading(false);
      }, debounceTime);
    };

    handleDebouncedFetch();

    return () => {
      clearTimeout(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return isLoading;
};

export default useDebouncedFetch;
