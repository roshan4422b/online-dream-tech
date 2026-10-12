"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesMark() {
  return (
    <svg className="services-mark" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M7 15h94v19L39 96v13h20l50-52V15H83" />
    </svg>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedItems = section.querySelectorAll(
      ".services-media, .services-mark, .services-heading-visual, .services-description",
    );
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      gsap.set(animatedItems, { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.querySelector(".services-layout"),
          start: "top 85%",
          end: "top 35%",
          scrub: 1.2,
        },
      });

      timeline
        .fromTo(".services-media", { clipPath: "inset(0 100% 0 0)", scale: 1.04 }, { clipPath: "inset(0 0% 0 0)", scale: 1, ease: "none" }, 0)
        .fromTo(".services-mark", { x: -18, opacity: 0 }, { x: 0, opacity: 1, ease: "none" }, 0.08)
        .fromTo(".services-heading-visual", { yPercent: 110, backgroundSize: "0% 100%, 100% 100%" }, { yPercent: 0, backgroundSize: "100% 100%, 100% 100%", ease: "none" }, 0.12)
        .fromTo(".services-description", { y: 18, backgroundSize: "0% 100%, 100% 100%" }, { y: 0, backgroundSize: "100% 100%, 100% 100%", ease: "none" }, 0.3);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-container services-layout">
        <div className="services-media-cell">
          <div className="services-media" role="img" aria-label="Creative team collaborating around a laptop" />
        </div>
        <div className="services-layout-spacer" aria-hidden="true" />
        <div className="services-info">
          <div className="services-intro">
            <ServicesMark />
            <h2 id="services-title" className="services-heading">
              <span className="services-heading-line"><span className="services-heading-visual">BEST CREATIVE &amp;</span></span>
              <span className="services-heading-line"><span className="services-heading-visual">DIGITAL AGENCY</span></span>
            </h2>
          </div>
          <p className="services-description">Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably.</p>
        </div>
      </div>
    </section>
  );
}
