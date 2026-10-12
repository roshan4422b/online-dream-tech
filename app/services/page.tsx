import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import RouteHero from "../../components/shared/route-hero";

export default function ServicesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <RouteHero title="SERVICES" />
      </main>
    </PageShell>
  );
}
