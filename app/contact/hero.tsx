import Link from "next/link";
import RibbonMark from "../../components/shared/ribbon-mark";

export default function ContactHero() {
  return (
    <section className="hero route-hero" aria-labelledby="contact-title">
      <div className="hero-copy">
        <h1 id="contact-title"><span className="heading-mask"><span className="heading-line">CONTACT</span></span></h1>
        <div className="intro-row">
          <p className="eyebrow">ONLINE DREAM TECH</p>
          <div className="intro-body">
            <p>Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies that resonate with target audiences. Services may include graphic design, content creation, social media management.</p>
            <Link href="/services" className="know-more">EXPLORE SERVICES <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
      <div className="hero-art">
        <RibbonMark />
      </div>
    </section>
  );
}