"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ productCategories = [] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuTimeout = useRef(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleSubmenuEnter = () => {
    clearTimeout(submenuTimeout.current);
    setSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    submenuTimeout.current = setTimeout(() => setSubmenuOpen(false), 150);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        {/* Logo */}
        <Link href="/" className={styles["header__logo"]} aria-label="Geco Home">
          <svg width="116" height="30" viewBox="0 0 233 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_logo)">
              <path d="M143.431 60C134.757 60 127.589 57.1055 121.914 51.3476C116.27 45.5711 113.445 38.4625 113.445 30.0031C113.445 21.5437 116.27 14.3542 121.914 8.60255C127.582 2.86959 134.75 0 143.431 0C148.651 0 153.467 1.20137 157.897 3.65391C162.321 6.10022 165.756 9.42421 168.239 13.5823L158.439 19.2717C156.989 16.6947 154.954 14.6716 152.335 13.2151C149.696 11.7585 146.728 11.0302 143.431 11.0302C137.837 11.0302 133.307 12.8042 129.885 16.3025C126.45 19.8195 124.739 24.3822 124.739 29.9907C124.739 35.5991 126.45 40.0747 129.885 43.5917C133.307 47.1086 137.837 48.864 143.431 48.864C146.728 48.864 149.703 48.1482 152.366 46.6729C155.035 45.2225 157.057 43.2306 158.445 40.7034L168.245 46.3928C165.762 50.5758 162.334 53.8749 157.941 56.315C153.548 58.7675 148.713 59.9938 143.437 59.9938" fill="#8BD40A"/>
              <path d="M224.264 51.2915C218.446 57.1054 211.353 59.9937 203.04 59.9937C194.727 59.9937 187.627 57.0992 181.853 51.2915C176.054 45.5025 173.154 38.3939 173.154 29.9968C173.154 21.5996 176.054 14.4786 181.853 8.68958C187.634 2.88814 194.715 -0.00634766 203.04 -0.00634766C211.365 -0.00634766 218.446 2.88192 224.264 8.68958C230.082 14.4723 233 21.581 233 29.9968C233 38.4126 230.082 45.5025 224.264 51.2915ZM189.78 43.5542C193.352 47.0961 197.782 48.8763 203.034 48.8763C208.285 48.8763 212.691 47.0961 216.275 43.5542C219.853 40.0061 221.626 35.4807 221.626 30.003C221.626 24.5252 219.846 19.9688 216.275 16.3958C212.697 12.8228 208.285 11.0363 203.034 11.0363C197.782 11.0363 193.352 12.8166 189.78 16.3958C186.215 19.9688 184.429 24.5003 184.429 30.003C184.429 35.5056 186.215 40.0061 189.78 43.5542Z" fill="#8BD40A"/>
              <path d="M40.0965 27.843V27.8555C29.3692 27.9177 27.4092 37.9021 27.4092 37.9021H47.7872C46.7419 41.3133 44.7694 43.9961 41.9009 45.9507C39.0013 47.8866 35.3551 48.8763 30.9746 48.8763C25.0385 48.8763 20.2785 47.0961 16.682 43.5542C13.0855 40.0061 11.281 35.5181 11.281 30.0715C11.281 24.6248 13.0544 20.031 16.5949 16.4393C20.1353 12.8477 24.659 11.0363 30.1408 11.0363C33.5568 11.0363 36.6555 11.777 39.4058 13.2647C42.1872 14.7338 44.2716 16.6759 45.6343 19.035L55.3597 13.4204C52.8771 9.34939 49.4299 6.10632 44.9747 3.65378C40.5196 1.20125 35.6102 -0.00634766 30.2279 -0.00634766C21.6598 -0.00634766 14.4855 2.89437 8.6801 8.7207C2.91203 14.5595 0 21.6681 0 30.0715C0 38.4748 2.92448 45.5025 8.77343 51.2977C14.6286 57.1116 22.0207 59.9999 30.9061 59.9999C39.2378 59.9999 46.0636 57.4415 51.3339 52.331C56.6167 47.233 59.2362 40.5414 59.2362 32.3248V27.8492H40.0965V27.843Z" fill="#8BD40A"/>
              <path d="M100.41 47.9674H77.8662V35.0263H105.792V24.3197H77.8662V12.0446H100.011C106.7 11.7707 107.727 5.3406 107.864 2.48968V1.15137H66.498V58.842H108.25C108.25 58.842 109.003 48.3098 100.403 47.9674" fill="#8BD40A"/>
            </g>
            <defs>
              <clipPath id="clip0_logo">
                <rect width="233" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles["header__nav"]}>
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            if (label === "Products" && productCategories.length > 0) {
              return (
                <div
                  key={href}
                  className={styles["header__nav-item"]}
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <Link
                    href={href}
                    className={`${styles["header__nav-link"]} ${isActive ? styles["header__nav-link--active"] : ""}`}
                  >
                    {label}
                  </Link>
                  {submenuOpen && (
                    <div className={styles["header__submenu"]}>
                      {productCategories.map((cat) => {
                        const catActive = pathname === `/products/${cat.slug}`;
                        return (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className={`${styles["header__submenu-link"]} ${catActive ? styles["header__submenu-link--active"] : ""}`}
                          >
                            {cat.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={`${styles["header__nav-link"]} ${isActive ? styles["header__nav-link--active"] : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Icons */}
        <div className={styles["header__icons"]}>
          <div className={styles["header__social"]}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4082 13.1999L15.897 9.72515H12.8407V7.47028C12.8407 6.51965 13.2677 5.59303 14.6365 5.59303H16.0259V2.63465C16.0259 2.63465 14.765 2.3999 13.5595 2.3999C11.0426 2.3999 9.39739 4.06415 9.39739 7.0769V9.72515H6.59961V13.1999H9.39739V21.5999H12.8407V13.1999H15.4082Z" fill="white"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0025 7.07622C9.27834 7.07622 7.08099 9.27357 7.08099 11.9978C7.08099 14.722 9.27834 16.9193 12.0025 16.9193C14.7267 16.9193 16.9241 14.722 16.9241 11.9978C16.9241 9.27357 14.7267 7.07622 12.0025 7.07622ZM12.0025 15.1974C10.2421 15.1974 8.80289 13.7625 8.80289 11.9978C8.80289 10.233 10.2378 8.79812 12.0025 8.79812C13.7673 8.79812 15.2022 10.233 15.2022 11.9978C15.2022 13.7625 13.763 15.1974 12.0025 15.1974ZM18.2733 6.87491C18.2733 7.51312 17.7593 8.02284 17.1254 8.02284C16.4872 8.02284 15.9775 7.50884 15.9775 6.87491C15.9775 6.24097 16.4915 5.72697 17.1254 5.72697C17.7593 5.72697 18.2733 6.24097 18.2733 6.87491ZM21.5329 8.03997C21.4601 6.50226 21.1089 5.14016 19.9824 4.01793C18.8601 2.8957 17.498 2.54446 15.9603 2.46736C14.3755 2.37741 9.62529 2.37741 8.04046 2.46736C6.50703 2.54018 5.14493 2.89141 4.01842 4.01364C2.8919 5.13588 2.54495 6.49797 2.46785 8.03569C2.3779 9.62052 2.3779 14.3707 2.46785 15.9556C2.54067 17.4933 2.8919 18.8554 4.01842 19.9776C5.14493 21.0998 6.50274 21.4511 8.04046 21.5282C9.62529 21.6181 14.3755 21.6181 15.9603 21.5282C17.498 21.4553 18.8601 21.1041 19.9824 19.9776C21.1046 18.8554 21.4558 17.4933 21.5329 15.9556C21.6229 14.3707 21.6229 9.6248 21.5329 8.03997ZM19.4855 17.656C19.1514 18.4956 18.5046 19.1423 17.6608 19.4807C16.3972 19.9819 13.3989 19.8662 12.0025 19.8662C10.6062 19.8662 7.60356 19.9776 6.34426 19.4807C5.50473 19.1466 4.85795 18.4998 4.51957 17.656C4.01842 16.3925 4.13407 13.3941 4.13407 11.9978C4.13407 10.6014 4.0227 7.59879 4.51957 6.33949C4.85366 5.49996 5.50045 4.85318 6.34426 4.51479C7.60784 4.01364 10.6062 4.12929 12.0025 4.12929C13.3989 4.12929 16.4015 4.01793 17.6608 4.51479C18.5003 4.84889 19.1471 5.49567 19.4855 6.33949C19.9866 7.60307 19.871 10.6014 19.871 11.9978C19.871 13.3941 19.9866 16.3967 19.4855 17.656Z" fill="white"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6014 21.5997V14.5677C21.6014 11.1117 20.8574 8.47168 16.8254 8.47168C14.8814 8.47168 13.5854 9.52768 13.0574 10.5357H13.0094V8.78368H9.19336V21.5997H13.1774V15.2397C13.1774 13.5597 13.4894 11.9517 15.5534 11.9517C17.5934 11.9517 17.6174 13.8477 17.6174 15.3357V21.5757H21.6014V21.5997Z" fill="white"/>
                <path d="M2.71289 8.78369H6.69689V21.5997H2.71289V8.78369Z" fill="white"/>
                <path d="M4.70439 2.3999C3.43239 2.3999 2.40039 3.4319 2.40039 4.7039C2.40039 5.9759 3.43239 7.0319 4.70439 7.0319C5.97639 7.0319 7.00839 5.9759 7.00839 4.7039C7.00839 3.4319 5.97639 2.3999 4.70439 2.3999Z" fill="white"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4985 6.65992C23.2225 5.61292 22.4092 4.78833 21.3766 4.50849C19.505 4 12 4 12 4C12 4 4.49503 4 2.62336 4.50849C1.59077 4.78837 0.777523 5.61292 0.501503 6.65992C0 8.55768 0 12.5172 0 12.5172C0 12.5172 0 16.4767 0.501503 18.3744C0.777523 19.4214 1.59077 20.2117 2.62336 20.4915C4.49503 21 12 21 12 21C12 21 19.505 21 21.3766 20.4915C22.4092 20.2117 23.2225 19.4214 23.4985 18.3744C24 16.4767 24 12.5172 24 12.5172C24 12.5172 24 8.55768 23.4985 6.65992ZM9.54544 16.1121V8.92225L15.8181 12.5173L9.54544 16.1121Z" fill="white"/>
</svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles["header__hamburger"]}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles["mobile-menu"]} ${menuOpen ? styles["mobile-menu--open"] : ""}`}>
        <div className={styles["mobile-menu__header"]}>
          <Link href="/" className={styles["header__logo"]} aria-label="Geco Home" onClick={() => setMenuOpen(false)}>
            <svg width="116" height="30" viewBox="0 0 233 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_logo_mobile)">
                <path d="M143.431 60C134.757 60 127.589 57.1055 121.914 51.3476C116.27 45.5711 113.445 38.4625 113.445 30.0031C113.445 21.5437 116.27 14.3542 121.914 8.60255C127.582 2.86959 134.75 0 143.431 0C148.651 0 153.467 1.20137 157.897 3.65391C162.321 6.10022 165.756 9.42421 168.239 13.5823L158.439 19.2717C156.989 16.6947 154.954 14.6716 152.335 13.2151C149.696 11.7585 146.728 11.0302 143.431 11.0302C137.837 11.0302 133.307 12.8042 129.885 16.3025C126.45 19.8195 124.739 24.3822 124.739 29.9907C124.739 35.5991 126.45 40.0747 129.885 43.5917C133.307 47.1086 137.837 48.864 143.431 48.864C146.728 48.864 149.703 48.1482 152.366 46.6729C155.035 45.2225 157.057 43.2306 158.445 40.7034L168.245 46.3928C165.762 50.5758 162.334 53.8749 157.941 56.315C153.548 58.7675 148.713 59.9938 143.437 59.9938" fill="#8BD40A"/>
                <path d="M224.264 51.2915C218.446 57.1054 211.353 59.9937 203.04 59.9937C194.727 59.9937 187.627 57.0992 181.853 51.2915C176.054 45.5025 173.154 38.3939 173.154 29.9968C173.154 21.5996 176.054 14.4786 181.853 8.68958C187.634 2.88814 194.715 -0.00634766 203.04 -0.00634766C211.365 -0.00634766 218.446 2.88192 224.264 8.68958C230.082 14.4723 233 21.581 233 29.9968C233 38.4126 230.082 45.5025 224.264 51.2915ZM189.78 43.5542C193.352 47.0961 197.782 48.8763 203.034 48.8763C208.285 48.8763 212.691 47.0961 216.275 43.5542C219.853 40.0061 221.626 35.4807 221.626 30.003C221.626 24.5252 219.846 19.9688 216.275 16.3958C212.697 12.8228 208.285 11.0363 203.034 11.0363C197.782 11.0363 193.352 12.8166 189.78 16.3958C186.215 19.9688 184.429 24.5003 184.429 30.003C184.429 35.5056 186.215 40.0061 189.78 43.5542Z" fill="#8BD40A"/>
                <path d="M40.0965 27.843V27.8555C29.3692 27.9177 27.4092 37.9021 27.4092 37.9021H47.7872C46.7419 41.3133 44.7694 43.9961 41.9009 45.9507C39.0013 47.8866 35.3551 48.8763 30.9746 48.8763C25.0385 48.8763 20.2785 47.0961 16.682 43.5542C13.0855 40.0061 11.281 35.5181 11.281 30.0715C11.281 24.6248 13.0544 20.031 16.5949 16.4393C20.1353 12.8477 24.659 11.0363 30.1408 11.0363C33.5568 11.0363 36.6555 11.777 39.4058 13.2647C42.1872 14.7338 44.2716 16.6759 45.6343 19.035L55.3597 13.4204C52.8771 9.34939 49.4299 6.10632 44.9747 3.65378C40.5196 1.20125 35.6102 -0.00634766 30.2279 -0.00634766C21.6598 -0.00634766 14.4855 2.89437 8.6801 8.7207C2.91203 14.5595 0 21.6681 0 30.0715C0 38.4748 2.92448 45.5025 8.77343 51.2977C14.6286 57.1116 22.0207 59.9999 30.9061 59.9999C39.2378 59.9999 46.0636 57.4415 51.3339 52.331C56.6167 47.233 59.2362 40.5414 59.2362 32.3248V27.8492H40.0965V27.843Z" fill="#8BD40A"/>
                <path d="M100.41 47.9674H77.8662V35.0263H105.792V24.3197H77.8662V12.0446H100.011C106.7 11.7707 107.727 5.3406 107.864 2.48968V1.15137H66.498V58.842H108.25C108.25 58.842 109.003 48.3098 100.403 47.9674" fill="#8BD40A"/>
              </g>
              <defs>
                <clipPath id="clip0_logo_mobile">
                  <rect width="233" height="60" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
          <button
            className={styles["mobile-menu__close"]}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <nav className={styles["mobile-menu__nav"]}>
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            if (label === "Products" && productCategories.length > 0) {
              return (
                <div key={href} className={styles["mobile-menu__group"]}>
                  <button
                    className={`${styles["mobile-menu__link"]} ${isActive ? styles["mobile-menu__link--active"] : ""}`}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                  >
                    <span>{label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: mobileProductsOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}
                    >
                      <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileProductsOpen && (
                    <div className={styles["mobile-menu__sublinks"]}>
                      <Link
                        href="/products"
                        className={styles["mobile-menu__sublink"]}
                        onClick={() => setMenuOpen(false)}
                      >
                        All Products
                      </Link>
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          className={styles["mobile-menu__sublink"]}
                          onClick={() => setMenuOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={`${styles["mobile-menu__link"]} ${isActive ? styles["mobile-menu__link--active"] : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
