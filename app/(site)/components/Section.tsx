export default function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className || ""}`}>
      <div className="container-soft">{children}</div>
    </section>
  );
}