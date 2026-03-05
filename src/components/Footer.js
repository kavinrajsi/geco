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
              <svg width="233" height="60" viewBox="0 0 233 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GECO">
                <g clipPath="url(#footerLogoClip)">
                  <path d="M143.43 60C134.756 60 127.588 57.1055 121.913 51.3476C116.27 45.5711 113.445 38.4625 113.445 30.0031C113.445 21.5437 116.27 14.3542 121.913 8.60255C127.582 2.86959 134.75 0 143.43 0C148.651 0 153.467 1.20137 157.897 3.65391C162.321 6.10022 165.756 9.42421 168.238 13.5823L158.438 19.2717C156.988 16.6947 154.954 14.6716 152.334 13.2151C149.696 11.7585 146.728 11.0302 143.43 11.0302C137.836 11.0302 133.306 12.8042 129.884 16.3025C126.449 19.8195 124.738 24.3822 124.738 29.9907C124.738 35.5991 126.449 40.0747 129.884 43.5917C133.306 47.1086 137.836 48.864 143.43 48.864C146.728 48.864 149.702 48.1482 152.365 46.6729C155.035 45.2225 157.057 43.2306 158.444 40.7034L168.245 46.3928C165.762 50.5758 162.333 53.8749 157.94 56.315C153.548 58.7675 148.713 59.9938 143.436 59.9938" fill="#1F1F1F"/>
                  <path d="M224.264 51.2915C218.446 57.1054 211.352 59.9937 203.039 59.9937C194.726 59.9937 187.627 57.0992 181.853 51.2915C176.053 45.5025 173.154 38.3939 173.154 29.9968C173.154 21.5996 176.053 14.4786 181.853 8.68958C187.633 2.88814 194.714 -0.00634766 203.039 -0.00634766C211.365 -0.00634766 218.446 2.88192 224.264 8.68958C230.082 14.4723 233 21.581 233 29.9968C233 38.4126 230.082 45.5025 224.264 51.2915ZM189.78 43.5542C193.351 47.0961 197.782 48.8763 203.033 48.8763C208.285 48.8763 212.69 47.0961 216.274 43.5542C219.852 40.0061 221.625 35.4807 221.625 30.003C221.625 24.5252 219.846 19.9688 216.274 16.3958C212.696 12.8228 208.285 11.0363 203.033 11.0363C197.782 11.0363 193.351 12.8166 189.78 16.3958C186.214 19.9688 184.429 24.5003 184.429 30.003C184.429 35.5056 186.214 40.0061 189.78 43.5542Z" fill="#1F1F1F"/>
                  <path d="M40.0965 27.843V27.8555C29.3692 27.9177 27.4092 37.9021 27.4092 37.9021H47.7872C46.7419 41.3133 44.7694 43.9961 41.9009 45.9507C39.0013 47.8866 35.3551 48.8763 30.9746 48.8763C25.0385 48.8763 20.2785 47.0961 16.682 43.5542C13.0855 40.0061 11.281 35.5181 11.281 30.0715C11.281 24.6248 13.0544 20.031 16.5949 16.4393C20.1353 12.8477 24.659 11.0363 30.1408 11.0363C33.5568 11.0363 36.6555 11.777 39.4058 13.2647C42.1872 14.7338 44.2716 16.6759 45.6343 19.035L55.3597 13.4204C52.8771 9.34939 49.4299 6.10632 44.9747 3.65378C40.5196 1.20125 35.6102 -0.00634766 30.2279 -0.00634766C21.6598 -0.00634766 14.4855 2.89437 8.6801 8.7207C2.91203 14.5595 0 21.6681 0 30.0715C0 38.4748 2.92448 45.5025 8.77343 51.2977C14.6286 57.1116 22.0207 59.9999 30.9061 59.9999C39.2378 59.9999 46.0636 57.4415 51.3339 52.331C56.6167 47.233 59.2362 40.5414 59.2362 32.3248V27.8492H40.0965V27.843Z" fill="#1F1F1F"/>
                  <path d="M100.409 47.9674H77.8657V35.0263H105.791V24.3197H77.8657V12.0446H100.011C106.7 11.7707 107.726 5.3406 107.863 2.48968V1.15137H66.4976V58.842H108.249C108.249 58.842 109.002 48.3098 100.403 47.9674" fill="#1F1F1F"/>
                </g>
                <defs>
                  <clipPath id="footerLogoClip">
                    <rect width="233" height="60" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
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
