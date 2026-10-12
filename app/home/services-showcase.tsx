"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services-showcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Thoughtfully designed responsive websites clarify your brand, organize information, and guide visitors toward meaningful enquiries, bookings, and sales, with fast performance and accessible experiences on any device or screen size.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Website analytics displayed on a laptop",
  },
  {
    number: "02",
    title: "Software Development",
    description: "We build custom software and digital tools around your workflows, helping teams reduce repetitive work, connect information, serve customers better, and adapt confidently as business needs change and opportunities grow.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A team collaborating around computers",
  },
  {
    number: "03",
    title: "App Development",
    description: "We create intuitive mobile apps with useful features, reliable performance, and thoughtful interfaces, giving customers a simpler way to connect with your business wherever they are and supporting your growth.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mobile applications displayed on a smartphone",
  },
  {
    number: "04",
    title: "E-Commerce Development",
    description: "We develop flexible ecommerce stores that make browsing effortless, present products clearly, and simplify checkout, helping your business build trust, increase conversions, and serve customers across every sales channel securely.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A customer making a payment at a shop",
  },
  {
    number: "05",
    title: "News Portal Development",
    description: "We build fast news and publishing platforms that organize stories, support editorial workflows, and help readers discover timely coverage across devices, while giving publishers room to grow with confidence online.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Newspapers and printed news pages",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "We plan and deliver focused digital campaigns across search, social, and content channels, helping brands reach relevant audiences, strengthen engagement, measure results, and turn attention into sustainable growth over time.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A digital marketing team reviewing campaign work",
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      section.querySelectorAll(`.${styles.serviceTitle}`).item(0)?.setAttribute("aria-current", "true");
      section.querySelectorAll(`.${styles.serviceDetails}`).forEach((detail) => {
        detail.setAttribute("aria-hidden", "false");
      });
      return;
    }

    const context = gsap.context(() => {
      const names = gsap.utils.toArray<HTMLElement>(`.${styles.serviceTitle}`);
      const details = gsap.utils.toArray<HTMLElement>(`.${styles.serviceDetails}`);
      const images = gsap.utils.toArray<HTMLElement>(`.${styles.cornerImage}`);
      const steps = section.querySelector(`.${styles.steps}`);
      if (!steps) return;

      const nameY = names.map((name) => gsap.quickSetter(name, "y", "px"));
      const nameOpacity = names.map((name) => gsap.quickSetter(name, "opacity"));
      const nameScale = names.map((name) => gsap.quickSetter(name, "scale"));
      const detailY = details.map((detail) => gsap.quickSetter(detail, "y", "px"));
      const detailOpacity = details.map((detail) => gsap.quickSetter(detail, "opacity"));
      const imageOpacity = images.map((image) => gsap.quickSetter(image, "opacity"));
      const imageScale = images.map((image) => gsap.quickSetter(image, "scale"));
      const mobileLayout = window.matchMedia("(max-width: 760px)");
      let accessibleIndex = -1;

      const renderPosition = (position: number) => {
        const isMobile = mobileLayout.matches;
        const titleStep = isMobile ? 76 : 104;
        const titleOffset = mobileLayout.matches ? 0 : 1;
        names.forEach((_, index) => {
          let relativeIndex = index - position;
          if (isMobile && relativeIndex > services.length / 2) relativeIndex -= services.length;
          if (isMobile && relativeIndex < -services.length / 2) relativeIndex += services.length;
          const distance = Math.abs(relativeIndex);
          nameY[index]((relativeIndex - titleOffset) * titleStep);
          nameOpacity[index](Math.max(0.03, 1 - distance * (isMobile ? 0.76 : 0.9)));
          nameScale[index](Math.max(0.9, 1 - distance * 0.055));
        });

        details.forEach((_, index) => {
          const distance = Math.abs(index - position);
          detailOpacity[index](Math.max(0, 1 - distance * 1.6));
          detailY[index]((index - position) * 12);
        });

        images.forEach((image, index) => {
          const serviceIndex = Number(image.dataset.serviceIndex);
          const targetIndex = image.dataset.position === "topLeft"
            ? position
            : Math.min(position + 1, services.length - 1);
          const opacity = Math.max(0, 1 - Math.abs(serviceIndex - targetIndex));
          imageOpacity[index](opacity);
          imageScale[index](1.035 - opacity * 0.035);
          image.style.zIndex = opacity > 0.05 ? "2" : "1";
        });

        const nextAccessibleIndex = Math.round(position);
        if (accessibleIndex !== nextAccessibleIndex) {
          names.forEach((name, index) => {
            if (index === nextAccessibleIndex) name.setAttribute("aria-current", "true");
            else name.removeAttribute("aria-current");
          });
          details.forEach((detail, index) => {
            detail.setAttribute("aria-hidden", index === nextAccessibleIndex ? "false" : "true");
          });
          accessibleIndex = nextAccessibleIndex;
        }
      };

      const progress = { position: 0 };
      gsap.to(progress, {
        position: services.length - 1,
        ease: "none",
        onUpdate: () => renderPosition(progress.position),
        scrollTrigger: {
          trigger: steps,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      renderPosition(0);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Our services">
      <div className={styles.scrollTrack}>
        <div ref={stageRef} className={styles.stage}>
          <div className={styles.backdrop} aria-hidden="true" />
          <div className={styles.eyebrow}>WHAT WE DO</div>

          {services.flatMap((service, index) => (["topLeft", "bottomRight"] as const).map((position) => (
            <div
              key={`${service.number}-${position}`}
              className={`${styles.cornerImage} ${position === "topLeft" ? styles.topLeft : styles.bottomRight}`}
              data-service-index={index}
              data-position={position}
              aria-hidden="true"
              style={{ backgroundImage: `url("${service.image}")` }}
            />
          )))}

          <div className={styles.nameWindow} aria-label="Services">
            <ol className={styles.nameList}>
              {services.map((service, index) => (
                <li
                  key={service.number}
                  className={styles.serviceTitle}
                  style={{ "--service-index": index } as CSSProperties}
                >
                  {service.title.slice(0, service.title.lastIndexOf(" ") + 1)}
                  <span className={styles.titleAccent}>{service.title.split(" ").at(-1)}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.detailsWindow} aria-live="polite">
            {services.map((service, index) => (
              <div key={service.number} className={styles.serviceDetails} aria-hidden={index === 0 ? "false" : "true"}>
                <p className={styles.category}>ONLINE DREAM TECH · SERVICES</p>
                <p className={styles.description}>{service.description}</p>
                <span className={styles.number}>{service.number}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.steps} aria-hidden="true">
          {services.map((service) => <div className={styles.step} key={service.number} />)}
        </div>
      </div>
    </section>
  );
}
