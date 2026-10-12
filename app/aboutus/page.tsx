import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import RouteHero from "../../components/shared/route-hero";

export default function AboutUsPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <RouteHero title="ABOUT US" />
      </main>
    </PageShell>
  );
}
