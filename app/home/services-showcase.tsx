"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services-showcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Thoughtful, responsive websites that make your brand clear and help visitors take the next step.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Website analytics displayed on a laptop",
  },
  {
    number: "02",
    title: "Software Development",
    description: "Purpose-built software and digital tools shaped around the way your team and customers work.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A team collaborating around computers",
  },
  {
    number: "03",
    title: "App Development",
    description: "Useful mobile experiences designed to feel natural, perform reliably, and grow with your business.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mobile applications displayed on a smartphone",
  },
  {
    number: "04",
    title: "E-Commerce Development",
    description: "Flexible online stores that make it easier to discover products and complete a purchase.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A customer making a payment at a shop",
  },
  {
    number: "05",
    title: "News Portal Development",
    description: "Fast, organized publishing platforms that help readers find the stories that matter to them.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Newspapers and printed news pages",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "Clear, consistent campaigns that connect your business with the people you want to reach.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A digital marketing team reviewing campaign work",
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        `.${styles.headingLine}`,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        },
      );

      section.querySelectorAll<HTMLElement>(`.${styles.row}`).forEach((row) => {
        const image = row.querySelector<HTMLElement>(`.${styles.image}`);
        const media = row.querySelector<HTMLElement>(`.${styles.media}`);
        const copy = row.querySelectorAll<HTMLElement>(`.${styles.number}, .${styles.copy}`);
        if (!image || !media) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 35%",
            scrub: 0.8,
          },
        });
        timeline
          .fromTo(media, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", ease: "none" }, 0)
          .fromTo(image, { scale: 1.12 }, { scale: 1, ease: "none" }, 0)
          .fromTo(copy, { y: 28, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, ease: "none" }, 0.12);
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="odt-services-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>WHAT WE DO</p>
          <div className={styles.headerMain}>
            <h2 id="odt-services-title" className={styles.heading}>
              <span className={styles.headingMask}><span className={styles.headingLine}>Digital solutions</span></span>
              <span className={styles.headingMask}><span className={styles.headingLine}>made for growth.</span></span>
            </h2>
            <p className={styles.intro}>From your first digital presence to the tools that help you grow, we build practical experiences around your business.</p>
          </div>
        </header>

        <div className={styles.list}>
          {services.map((service, index) => (
            <article className={`${styles.row} ${index % 2 ? styles.reverse : ""}`} key={service.number}>
              <div className={styles.media}>
                <div
                  className={styles.image}
                  role="img"
                  aria-label={service.imageAlt}
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
              </div>
              <div className={styles.copy}>
                <span className={styles.number}>{service.number}</span>
                <div className={styles.copyText}>
                  <p className={styles.category}>ONLINE DREAM TECH · SERVICES</p>
                  <h3>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
