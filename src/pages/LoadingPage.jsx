import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function LoadingPage({ isLoading, toggleLoadPage }) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressValue <= 96) {
        setProgressValue((prevState) => prevState + 2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progressValue]);

  useEffect(() => {
    if (!isLoading && progressValue >= 98) {
      setProgressValue(100);

      const timeout = setTimeout(() => {
        toggleLoadPage();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, progressValue]);

  return (
    <section className="h-screen w-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <div className="h-1/2 w-[80%] sm:w-[50%] flex flex-col items-center justify-center gap-4">
        <div className="text-3xl">Loading</div>
        <div className="text-6xl">{progressValue}%</div>
        <Progress value={progressValue} />
      </div>
    </section>
  );
}
