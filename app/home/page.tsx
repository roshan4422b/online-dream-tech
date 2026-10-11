import PageShell from "../../components/shared/page-shell";
import Hero from "./hero";
import WhoWeAre from "./whoweare";

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <Hero />
        <WhoWeAre />
      </main>
    </PageShell>
  );
}