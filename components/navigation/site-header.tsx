"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/home" },
  { label: "Pages", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true" className="brand-mark">
      <path d="M4 3h12l14 14-14 14H4l14-14L4 3Z" fill="#c7f20b" />
      <path d="M4 3h12l8 8H12L4 3ZM4 31h12l8-8H12l-8 8Z" fill="#f7f9ed" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header entrance-header">
      <Link href="/home" className="wordmark" aria-label="Online Dream Tech home">
        <BrandMark />
        <span>Online Dream Tech</span>
      </Link>
      <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
        {links.map(({ label, href }, index) => (
          <Link href={href} key={label} onClick={() => setMenuOpen(false)}>
            {label}{index > 0 && index < 4 && <span className="chevron" />}
          </Link>
        ))}
      </nav>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
    </header>
  );
}