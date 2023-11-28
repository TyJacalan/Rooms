export default function ProfileInfoContainer({ children }) {
  return (
    <section className="flex flex-col items-center text-center sm:text-left sm:items-start gap-4">
      {children}
    </section>
  );
}
