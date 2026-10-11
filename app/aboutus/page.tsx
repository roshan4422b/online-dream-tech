import SiteHeader from "../../components/navigation/site-header";
import PageShell from "../../components/shared/page-shell";
import AboutUsHero from "./hero";
import WhoWeAre from "../home/whoweare";

export default function AboutUsPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <AboutUsHero />
        <WhoWeAre />
      </main>
    </PageShell>
  );
}