"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import RibbonMark from "../../components/shared/ribbon-mark";
import SiteHeader from "../../components/navigation/site-header";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const root = heroRef.current;
    const title = titleRef.current;
    const paragraph = paragraphRef.current;
    if (!root || !title || !paragraph) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      gsap.set(root.querySelectorAll(".wordmark, .main-nav a, .menu-toggle, .heading-line, .eyebrow, .entrance-paragraph, .know-more, .ribbon-mark, .project-card"), {
        opacity: 1,
        x: 0,
        y: 0,
        yPercent: 0,
        scale: 1,
      });
      return;
    }

    const context = gsap.context(() => {
      const heading = SplitText.create(title, {
        type: "lines",
        linesClass: "split-line",
        mask: "lines",
        lineThreshold: 0.2,
      });
      const intro = SplitText.create(paragraph, {
        type: "words",
        wordsClass: "word-word",
        reduceWhiteSpace: false,
      });
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".wordmark", { y: 18, opacity: 0, duration: 0.72 }, 0)
        .from(".main-nav a", { y: 18, opacity: 0, duration: 0.58, stagger: 0.08 }, 0.08)
        .from(".menu-toggle", { y: 18, opacity: 0, duration: 0.62 }, 0.14)
        .from(".eyebrow", { y: 16, opacity: 0, duration: 0.62 }, 0.28)
        .from(heading.lines, { yPercent: 110, opacity: 0, duration: 1.05, stagger: 0.12 }, 0.36)
        .from(".word-word", { y: 18, opacity: 0, duration: 0.55, stagger: 0.03 }, 0.68)
        .from(".know-more", { y: 16, opacity: 0, duration: 0.7 }, 0.85)
        .from(".ribbon-mark", { y: 28, x: -12, opacity: 0, scale: 0.97, duration: 0.9 }, 0.54)
        .from(".project-card", { y: 28, opacity: 0, duration: 0.8 }, 0.72);

      return () => {
        timeline.kill();
        heading.revert();
        intro.revert();
      };
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={heroRef} className="home-hero-shell">
      <SiteHeader />
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 ref={titleRef} id="hero-title">
            <span className="heading-mask"><span className="heading-line heading-line-one">DESIGNING</span></span>
            <span className="heading-mask"><span className="heading-line heading-line-two">CREATIVE</span></span>
          </h1>
          <div className="intro-row">
            <p className="eyebrow entrance-eyebrow">ONLINE DREAM TECH</p>
            <div className="intro-body">
              <p ref={paragraphRef} className="entrance-paragraph">Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies that resonate with target audiences. Services may include graphic design, content creation, social media management.</p>
              <a href="/aboutus" className="know-more entrance-cta">KNOW MORE <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="hero-art entrance-art" aria-hidden="false">
          <RibbonMark />
          <div className="project-card entrance-card">
            <div><strong>31K</strong><span>Completed Projects</span></div>
            <a href="/services" className="card-arrow" aria-label="Explore completed projects">↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}