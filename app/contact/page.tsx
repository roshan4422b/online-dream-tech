import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import RouteHero from "../../components/shared/route-hero";

export default function ContactPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <RouteHero title="CONTACT US" />
      </main>
    </PageShell>
  );
}
