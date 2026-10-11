import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import ContactHero from "./hero";

export default function ContactPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <ContactHero />
      </main>
    </PageShell>
  );
}