"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Motion",
    accent: "Graphics",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Market",
    accent: "Branding",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital",
    accent: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];

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
    const animatedItems = section.querySelectorAll(".portfolio-card, .team-card, .testimonial-card");

    if (mediaQuery.matches) {
      gsap.set(animatedItems, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-card",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
        },
      );

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

      <div className="portfolio-grid" aria-label="Selected work">
        {projects.map((project) => (
          <article key={`${project.title}-${project.accent}`} className="portfolio-card">
            <div className="portfolio-visual" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />
            <div className="portfolio-overlay" aria-hidden="true" />
            <div className="portfolio-meta">
              <div className="portfolio-copy">
                <span>{project.title}</span>
                <strong>{project.accent}</strong>
              </div>
              <a href="/services" className="text-link" aria-label={`View ${project.title} ${project.accent}`}>
                SEE DETAILS <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
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
