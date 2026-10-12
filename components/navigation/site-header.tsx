"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header entrance-header">
      <Link href="/home" className="wordmark" aria-label="Online Dream Tech home">
        <BrandMark />
        <span>Online Dream Tech</span>
      </Link>

      <nav id="main-navigation" className={`main-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
        {links.map(({ label, href }) => (
          <Link href={href} key={label} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

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
