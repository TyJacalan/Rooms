export default function ProductContainer({ children }) {
  return (
    <div className="h-44 max-w-[14rem] flex flex-col items-center justify-end gap-4 text-md">
      {children}
    </div>
  );
}
