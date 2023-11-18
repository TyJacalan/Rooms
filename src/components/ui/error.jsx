export function ErrorSpan({ children }) {
  return (
    <span className="flex mx-auto h-fit w-full items-center justify-start text-xs shadow-sm transition-colors text-red-400">
      {children}
    </span>
  );
}
