"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Managing Director",
    role: "Strategy Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Head Of Department",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marketing Manager",
    role: "Growth & Insights",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sales Depa",
    role: "Brand Partnerships",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animatedItems = section.querySelectorAll(".team-card, .testimonial-card");

    if (mediaQuery.matches) {
      gsap.set(animatedItems, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="portfolio-section" aria-labelledby="recent-work-title">
      <div className="section-header section-header-surface">
        <div className="eyebrow-label">SERVICES WE OFFER</div>
        <h2 id="recent-work-title">Turn Information Into Actionable Insights</h2>
      </div>

      <div className="team-section">
        <div className="section-header compact-header">
          <div className="eyebrow-label">TEAM MEMBERS</div>
          <h2>Turn Information Into Actionable Insights</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-photo" style={{ backgroundImage: `url(${member.image})` }} aria-hidden="true" />
              <div className="team-details">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
