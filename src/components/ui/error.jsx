export function ErrorSpan({ children }) {
  return (
    <span className="flex mx-auto h-9 w-[86%] rounded-md items-center justify-center px-3 py-1 mb-4 text-sm shadow-sm transition-colors bg-red-200 text-red-500">
      {children}
    </span>
  );
}
