import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        {/* Brand + Contact */}
        <div className={styles["footer__brand"]}>
          <Link href="/" className={styles["footer__logo"]}>
            <Image
              src="/images/geco-logo.svg"
              alt="Geco"
              width={233}
              height={60}
            />
          </Link>
          <div className={styles["footer__contact"]}>
            <a href="mailto:contactus@vncgroup.com" className={styles["footer__contact-item"]}>
              <Image src="/icons/email.svg" alt="" width={24} height={24} />
              <span>contactus@vncgroup.com</span>
            </a>
            <a href="tel:18005993939" className={styles["footer__contact-item"]}>
              <Image src="/icons/phone.svg" alt="" width={24} height={24} />
              <span>1800 599 3939</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={styles["footer__nav"]}>
          <div className={styles["footer__links"]}>
            <h4 className={styles["footer__links-title"]}>Information</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles["footer__links"]}>
            <h4 className={styles["footer__links-title"]}>Products</h4>
            <Link href="/products/tile-adhesives">Tile Adhesives</Link>
            <Link href="/products/tile-grouts">Tile Grouts</Link>
            <Link href="/products/sealants">Sealants</Link>
            <Link href="/products/tapes">Tapes</Link>
          </div>

          <div className={styles["footer__links"]}>
            <h4 className={styles["footer__links-title"]}>Support</h4>
            <Link href="/material-estimator">Material Estimator</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles["footer__social"]}>
          <h4 className={styles["footer__links-title"]}>Follow Us</h4>
          <div className={styles["footer__social-icons"]}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/icons/youtube.svg" alt="" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
