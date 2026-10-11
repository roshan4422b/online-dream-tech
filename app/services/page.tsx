import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import WhoWeAre from "../home/whoweare";

export default function ServicesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <WhoWeAre />
      </main>
    </PageShell>
  );
}