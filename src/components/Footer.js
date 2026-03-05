"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const infoLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Tile Adhesives", href: "/products/tile-adhesives" },
  { label: "Tile Grouts", href: "/products/tile-grouts" },
  { label: "Sealants", href: "/products/sealants" },
  { label: "Tapes", href: "/products/tapes" },
];

const supportLinks = [
  { label: "Material Estimator", href: "/support/material-estimator" },
  { label: "Privacy Policy", href: "/support/privacy-policy" },
];

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1f1f1f" strokeWidth="2" />
      <path d="M2 8L12 14L22 8" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#1f1f1f" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
      <path d="M12.5 13.5H15L16 10H12.5V8C12.5 7.03 12.5 6 14.5 6H16V3.14C15.674 3.097 14.443 3 13.143 3C10.428 3 8.5 4.657 8.5 7.7V10H5.5V13.5H8.5V21H12.5V13.5Z" fill="#1f1f1f" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1f1f1f" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="#1f1f1f" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="#1f1f1f" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="#1f1f1f" strokeWidth="2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube">
      <path d="M22.54 6.42C22.42 5.94 22.19 5.5 21.86 5.13C21.53 4.76 21.11 4.48 20.64 4.31C18.88 3.75 12 3.75 12 3.75C12 3.75 5.12 3.75 3.36 4.31C2.89 4.48 2.47 4.76 2.14 5.13C1.81 5.5 1.58 5.94 1.46 6.42C0.9 8.18 0.9 12 0.9 12C0.9 12 0.9 15.82 1.46 17.58C1.58 18.06 1.81 18.5 2.14 18.87C2.47 19.24 2.89 19.52 3.36 19.69C5.12 20.25 12 20.25 12 20.25C12 20.25 18.88 20.25 20.64 19.69C21.11 19.52 21.53 19.24 21.86 18.87C22.19 18.5 22.42 18.06 22.54 17.58C23.1 15.82 23.1 12 23.1 12C23.1 12 23.1 8.18 22.54 6.42Z" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#1f1f1f" />
    </svg>
  );
}

function ChevronDownIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
      aria-hidden="true"
    >
      <path d="M4 6L8 10L12 6" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialLinks() {
  return (
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
  );
}

function AccordionSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordionSection}>
      <button
        className={styles.accordionTrigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDownIcon open={open} />
      </button>
      {open && (
        <ul className={styles.accordionLinks}>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top section */}
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>GECO</span>
            </Link>
            <div className={styles.contactInfo}>
              <a href="mailto:contactus@vncgroup.com" className={styles.contactItem}>
                <EmailIcon />
                <span>contactus@vncgroup.com</span>
              </a>
              <a href="tel:18005993939" className={styles.contactItem}>
                <PhoneIcon />
                <span>1800 599 3939</span>
              </a>
            </div>
          </div>

          {/* Desktop link columns */}
          <div className={styles.desktopLinks}>
            <div className={styles.linkCol}>
              <p className={styles.colHeading}>Information</p>
              <ul className={styles.linkList}>
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <p className={styles.colHeading}>Products</p>
              <ul className={styles.linkList}>
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <p className={styles.colHeading}>Support</p>
              <ul className={styles.linkList}>
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow us */}
          <div className={styles.followCol}>
            <p className={styles.colHeading}>Follow us</p>
            <SocialLinks />
          </div>

          {/* Mobile accordions */}
          <div className={styles.mobileAccordions}>
            <AccordionSection title="Information" links={infoLinks} />
            <AccordionSection title="Products" links={productLinks} />
            <AccordionSection title="Support" links={supportLinks} />
            <div className={styles.mobileFollow}>
              <p className={styles.colHeading}>Follow us</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>©VNC Electrodes. All Rights Reserved.</p>
          <p className={styles.madeBy}>Made by <span>Madarth</span></p>
        </div>
      </div>
    </footer>
  );
}
