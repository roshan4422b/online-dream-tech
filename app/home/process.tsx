"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "It feels like the team listened before they designed. Everything we needed was translated into a brand journey that was clear, confident, and measurable.",
    author: "Alicia Smith",
    role: "Marketing Director",
  },
  {
    quote:
      "They combined creativity with a practical strategy that gave our launch real traction. The execution was sharp from beginning to end.",
    author: "Daniel Price",
    role: "Founder",
  },
  {
    quote:
      "Their process was structured, collaborative, and surprisingly fast. We saw clarity in the first week and momentum from the first campaign.",
    author: "Nadia Wright",
    role: "Brand Lead",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We align on goals, audience, and the story worth telling before the design ever starts.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We map the right channels, creative direction, and messaging system to drive attention and action.",
  },
  {
    number: "03",
    title: "Production",
    text: "Our team creates polished assets, experiences, and campaigns built for conversion and longevity.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animated = section.querySelectorAll(".process-step, .testimonial-card");

    if (mediaQuery.matches) {
      gsap.set(animated, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".testimonial-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%" },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-section" aria-labelledby="process-title">
      <div className="section-header process-header">
        <div className="eyebrow-label">OUR PROCESS</div>
        <h2 id="process-title">Best Solutions Provider</h2>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => (
          <article key={step.number} className="process-step">
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>

      <div className="testimonials-shell">
        <div className="testimonial-heading-row">
          <h2>Testimonials</h2>
          <div className="rating-box" aria-label="Average rating 4.9 out of 5">
            <strong>4.9</strong>
            <div className="rating-meta">
              <div className="stars" aria-hidden="true">★★★★★</div>
              <span>145 (Review)</span>
            </div>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card">
              <p className="quote">“{item.quote}”</p>
              <div className="author-block">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
