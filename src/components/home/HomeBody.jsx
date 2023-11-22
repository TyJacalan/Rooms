export default function HomeBody({ children }) {
  return (
    <div className="h-2/3 w-full flex flex-col sm:flex-row items-center sm:items-start justify-start sm:justify-center gap-8">
      {children}
    </div>
  );
}
