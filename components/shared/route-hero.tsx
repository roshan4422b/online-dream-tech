export default function RouteHero({ title }: { title: string }) {
  const titleId = `route-title-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <section className="hero route-hero" aria-labelledby={titleId}>
      <h1 id={titleId}>{title}</h1>
    </section>
  );
}
