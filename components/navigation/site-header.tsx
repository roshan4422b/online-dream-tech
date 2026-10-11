"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const whatsappHref = `https://wa.me/919125085040?text=${encodeURIComponent("hello i want a website")}`;

function BrandMark() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true" className="brand-mark">
      <path d="M4 3h12l14 14-14 14H4l14-14L4 3Z" fill="#c7f20b" />
      <path d="M4 3h12l8 8H12L4 3ZM4 31h12l8-8H12l-8 8Z" fill="#f7f9ed" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header entrance-header">
      <Link href="/home" className="wordmark" aria-label="Online Dream Tech home">
        <BrandMark />
        <span>Online Dream Tech</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {links.map(({ label, href }) => (
          <Link href={href} key={label}>
            {label}
          </Link>
        ))}
      </nav>

      <a
        href={whatsappHref}
        className="header-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        Get Started
      </a>
    </header>
  );
}