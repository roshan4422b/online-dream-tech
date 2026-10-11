"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = ["120+ Brands Served", "4.9/5 Client Rating", "24/7 Strategic Support"];

function ServicesMark() {
  return (
    <svg className="services-mark" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M7 15h94v19L39 96v13h20l50-52V15H83" />
    </svg>
  );
}

export default function WhoWeAre() {
  const [selectedService, setSelectedService] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedItems = section.querySelectorAll(
      ".services-media, .services-mark, .services-heading-visual, .services-description, .service-card",
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
        .fromTo(".services-description", { y: 18, backgroundSize: "0% 100%, 100% 100%" }, { y: 0, backgroundSize: "100% 100%, 100% 100%", ease: "none" }, 0.3)
        .fromTo(".service-card", { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, ease: "none" }, 0.42);
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
          <ul className="service-list">
            {services.map((service, index) => (
              <li key={service}>
                <button className={`service-card${selectedService === index ? " active" : ""}`} type="button" aria-pressed={selectedService === index} onClick={() => setSelectedService(index)}>
                  <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <svg className="service-arrow" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 31 31 8M13 8h18v18" /></svg>
                  <span className="service-name">{service}</span>
                </button>
              </li>
            ))}
          </ul>
          <span className="service-selection-status" aria-live="polite">Selected trust badge: {services[selectedService]}</span>
        </div>
      </div>
    </section>
  );
}