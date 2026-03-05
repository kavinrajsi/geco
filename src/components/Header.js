"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Search">
      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
      <path d="M12.5 13.5H15L16 10H12.5V8C12.5 7.03 12.5 6 14.5 6H16V3.14C15.674 3.097 14.443 3 13.143 3C10.428 3 8.5 4.657 8.5 7.7V10H5.5V13.5H8.5V21H12.5V13.5Z" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube">
      <path d="M22.54 6.42C22.42 5.94 22.19 5.5 21.86 5.13C21.53 4.76 21.11 4.48 20.64 4.31C18.88 3.75 12 3.75 12 3.75C12 3.75 5.12 3.75 3.36 4.31C2.89 4.48 2.47 4.76 2.14 5.13C1.81 5.5 1.58 5.94 1.46 6.42C0.9 8.18 0.9 12 0.9 12C0.9 12 0.9 15.82 1.46 17.58C1.58 18.06 1.81 18.5 2.14 18.87C2.47 19.24 2.89 19.52 3.36 19.69C5.12 20.25 12 20.25 12 20.25C12 20.25 18.88 20.25 20.64 19.69C21.11 19.52 21.53 19.24 21.86 18.87C22.19 18.5 22.42 18.06 22.54 17.58C23.1 15.82 23.1 12 23.1 12C23.1 12 23.1 8.18 22.54 6.42Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
    </svg>
  );
}

function ChevronDownIcon({ color = "white" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Menu">
      <line x1="0" y1="2" x2="30" y2="2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="0" y1="10" x2="30" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="0" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Close">
      <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeLink = "Contact";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>GECO</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${link.label === activeLink ? styles.navLinkActive : ""}`}
            >
              {link.label}
              {link.hasDropdown && (
                <span className={styles.chevron}>
                  <ChevronDownIcon />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className={styles.desktopIcons}>
          <button className={styles.iconBtn} aria-label="Search">
            <SearchIcon />
          </button>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className={styles.mobileIcons}>
          <button className={styles.iconBtn} aria-label="Search">
            <SearchIcon />
          </button>
          <div className={styles.divider} aria-hidden="true" />
          <button
            className={styles.iconBtn}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.mobileNavLink} ${link.label === activeLink ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              {link.hasDropdown && (
                <span className={styles.chevron}>
                  <ChevronDownIcon color="#333333" />
                </span>
              )}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
