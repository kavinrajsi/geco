"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const productCategories = [
  { label: "Tile Adhesives", href: "/products" },
  { label: "Tile Grouts", href: "/products" },
  { label: "Sealants", href: "/products" },
  { label: "Tapes", href: "/products" },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="233" height="60" fill="none" viewBox="0 0 233 60" aria-label="GECO">
            <g clipPath="url(#a)">
              <path fill="#8BD40A" d="M143.43 60c-8.674 0-15.842-2.895-21.517-8.652-5.643-5.777-8.468-12.886-8.468-21.345 0-8.46 2.825-15.649 8.468-21.4C127.582 2.87 134.75 0 143.43 0c5.221 0 10.037 1.201 14.467 3.654 4.424 2.446 7.859 5.77 10.341 9.928l-9.8 5.69c-1.45-2.577-3.484-4.6-6.104-6.057-2.638-1.457-5.606-2.185-8.904-2.185-5.594 0-10.124 1.774-13.546 5.272-3.435 3.518-5.146 8.08-5.146 13.689 0 5.608 1.711 10.084 5.146 13.6 3.422 3.518 7.952 5.273 13.546 5.273 3.298 0 6.272-.716 8.935-2.191 2.67-1.45 4.692-3.442 6.079-5.97l9.801 5.69c-2.483 4.183-5.912 7.482-10.305 9.922-4.392 2.453-9.227 3.679-14.504 3.679m80.828-8.702c-5.818 5.813-12.911 8.702-21.224 8.702s-15.413-2.895-21.187-8.702c-5.799-5.79-8.699-12.898-8.699-21.295 0-8.397 2.9-15.518 8.699-21.307 5.78-5.802 12.861-8.696 21.187-8.696 8.325 0 15.406 2.888 21.224 8.696C230.082 14.473 233 21.58 233 29.997c0 8.416-2.918 15.506-8.736 21.295Zm-34.484-7.738c3.572 3.542 8.002 5.322 13.253 5.322 5.252 0 9.657-1.78 13.241-5.322 3.578-3.548 5.352-8.073 5.352-13.55 0-5.479-1.78-10.035-5.352-13.608-3.577-3.573-7.989-5.36-13.241-5.36-5.251 0-9.681 1.78-13.253 5.36-3.565 3.573-5.351 8.104-5.351 13.607s1.786 10.003 5.351 13.551ZM40.096 27.843v.013C29.37 27.918 27.41 37.902 27.41 37.902h20.378c-1.045 3.411-3.018 6.094-5.886 8.049-2.9 1.936-6.546 2.925-10.926 2.925-5.937 0-10.697-1.78-14.293-5.322-3.596-3.548-5.401-8.036-5.401-13.482 0-5.447 1.773-10.04 5.314-13.633 3.54-3.591 8.064-5.403 13.546-5.403 3.416 0 6.515.741 9.265 2.229 2.781 1.469 4.866 3.411 6.228 5.77l9.726-5.614c-2.483-4.071-5.93-7.315-10.385-9.767C40.52 1.2 35.61-.006 30.228-.006c-8.568 0-15.743 2.9-21.548 8.727C2.912 14.56 0 21.668 0 30.07c0 8.404 2.924 15.432 8.773 21.227C14.63 57.112 22.021 60 30.906 60c8.332 0 15.158-2.558 20.428-7.669 5.283-5.098 7.902-11.79 7.902-20.006v-4.476h-19.14v-.006Zm60.313 20.125H77.866V35.026h27.925V24.32H77.866V12.045h22.145c6.689-.274 7.716-6.704 7.852-9.555V1.152H66.498v57.69h41.751s.753-10.532-7.846-10.874"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h233v60H0z"/>
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className={styles.navDropdownWrap}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.navLinkActive : ""}`}
                >
                  {link.label}
                  <span className={styles.chevron}>
                    <ChevronDownIcon />
                  </span>
                </Link>
                {dropdownOpen && (
                  <div className={styles.productDropdown}>
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className={styles.dropdownItem}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
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
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ""}`}
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
