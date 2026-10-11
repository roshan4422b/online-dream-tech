import PageShell from "../../components/shared/page-shell";
import Hero from "./hero";
import PortfolioSection from "./portfolio";
import ProcessSection from "./process";
import { ContactCTA, SiteFooter } from "./cta-footer";
import WhoWeAre from "./whoweare";
import ServicesShowcase from "./services-showcase";

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <Hero />
        <WhoWeAre />
        <ServicesShowcase />
        <PortfolioSection />
        <ProcessSection />
        <ContactCTA />
        <SiteFooter />
      </main>
    </PageShell>
  );
}
