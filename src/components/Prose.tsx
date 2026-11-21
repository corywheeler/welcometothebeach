export default function Prose({ title, intro, children }: { title: string; intro?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-extrabold sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 text-lg text-ink/70">{intro}</p>}
      <div className="mt-8 space-y-5 leading-relaxed text-ink/85 [&_a]:font-semibold [&_a]:text-ocean-700 [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink">
        {children}
      </div>
    </div>
  );
}
