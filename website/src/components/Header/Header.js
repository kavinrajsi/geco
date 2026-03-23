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
  { href: "/contact-us", label: "Contact" },
];

export default function Header({ productCategories = [], products = [] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuTimeout = useRef(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const handleSubmenuEnter = () => {
    clearTimeout(submenuTimeout.current);
    setSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    submenuTimeout.current = setTimeout(() => setSubmenuOpen(false), 150);
  };

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else if (!menuOpen) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [searchOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        {/* Logo */}
        <Link
          href="/"
          className={styles["header__logo"]}
          aria-label="Geco Home"
        >
          <svg
            width="233"
            height="60"
            viewBox="0 0 233 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1479_297)">
              <path
                d="M143.43 60C134.756 60 127.588 57.1055 121.913 51.3476C116.27 45.5711 113.445 38.4625 113.445 30.0031C113.445 21.5437 116.27 14.3542 121.913 8.60255C127.582 2.86959 134.75 0 143.43 0C148.651 0 153.467 1.20137 157.897 3.65391C162.321 6.10022 165.756 9.42421 168.238 13.5823L158.438 19.2717C156.988 16.6947 154.954 14.6716 152.334 13.2151C149.696 11.7585 146.728 11.0302 143.43 11.0302C137.836 11.0302 133.306 12.8042 129.884 16.3025C126.449 19.8195 124.738 24.3822 124.738 29.9907C124.738 35.5991 126.449 40.0747 129.884 43.5917C133.306 47.1086 137.836 48.864 143.43 48.864C146.728 48.864 149.702 48.1482 152.365 46.6729C155.035 45.2225 157.057 43.2306 158.444 40.7034L168.245 46.3928C165.762 50.5758 162.333 53.8749 157.94 56.315C153.548 58.7675 148.713 59.9938 143.436 59.9938"
                fill="#8BD40A"
              />
              <path
                d="M224.264 51.2916C218.446 57.1055 211.353 59.9938 203.04 59.9938C194.727 59.9938 187.627 57.0993 181.853 51.2916C176.054 45.5026 173.154 38.394 173.154 29.9969C173.154 21.5997 176.054 14.4787 181.853 8.6897C187.633 2.88827 194.714 -0.00622559 203.04 -0.00622559C211.365 -0.00622559 218.446 2.88204 224.264 8.6897C230.082 14.4725 233 21.5811 233 29.9969C233 38.4127 230.082 45.5026 224.264 51.2916ZM189.78 43.5543C193.352 47.0962 197.782 48.8764 203.033 48.8764C208.285 48.8764 212.69 47.0962 216.274 43.5543C219.852 40.0062 221.626 35.4809 221.626 30.0031C221.626 24.5254 219.846 19.9689 216.274 16.3959C212.697 12.8229 208.285 11.0364 203.033 11.0364C197.782 11.0364 193.352 12.8167 189.78 16.3959C186.215 19.9689 184.429 24.5005 184.429 30.0031C184.429 35.5058 186.215 40.0062 189.78 43.5543Z"
                fill="#8BD40A"
              />
              <path
                d="M40.0965 27.8431V27.8556C29.3692 27.9178 27.4092 37.9023 27.4092 37.9023H47.7872C46.7419 41.3134 44.7694 43.9963 41.9009 45.9508C39.0013 47.8867 35.3551 48.8764 30.9746 48.8764C25.0385 48.8764 20.2785 47.0962 16.682 43.5543C13.0855 40.0062 11.281 35.5182 11.281 30.0716C11.281 24.625 13.0544 20.0311 16.5949 16.4395C20.1353 12.8478 24.659 11.0364 30.1408 11.0364C33.5568 11.0364 36.6555 11.7772 39.4058 13.2649C42.1872 14.7339 44.2716 16.676 45.6343 19.0352L55.3597 13.4205C52.8771 9.34952 49.4299 6.10644 44.9747 3.65391C40.5196 1.20137 35.6102 -0.00622559 30.2279 -0.00622559C21.6598 -0.00622559 14.4855 2.89449 8.6801 8.72082C2.91203 14.5596 0 21.6682 0 30.0716C0 38.4749 2.92448 45.5026 8.77343 51.2979C14.6286 57.1117 22.0207 60 30.9061 60C39.2378 60 46.0636 57.4416 51.3339 52.3312C56.6167 47.2331 59.2362 40.5415 59.2362 32.3249V27.8494H40.0965V27.8431Z"
                fill="#8BD40A"
              />
              <path
                d="M100.409 47.9676H77.8658V35.0265H105.791V24.32H77.8658V12.0448H100.011C106.7 11.7709 107.727 5.3408 107.863 2.48989V1.15157H66.4977V58.8422H108.249C108.249 58.8422 109.002 48.31 100.403 47.9676"
                fill="#8BD40A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1479_297">
                <rect width="233" height="60" fill="white" />
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
                    className={`${styles["header__nav-link"]} ${styles["header__nav-link--dropdown"]} ${isActive ? styles["header__nav-link--active"] : ""}`}
                  >
                    {label}
                    <svg
                      className={styles["header__chevron"]}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  {submenuOpen && (
                    <div className={styles["header__submenu"]}>
                      {productCategories.map((cat) => {
                        const catActive =
                          pathname === `/products/category/${cat.slug}`;
                        return (
                          <Link
                            key={cat.slug}
                            href={`/products/category/${cat.slug}`}
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
          <button
            className={styles["header__search-btn"]}
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.35 21.0004L17 16.6504" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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
      <div
        className={`${styles["mobile-menu__backdrop"]} ${menuOpen ? styles["mobile-menu__backdrop--visible"] : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`${styles["mobile-menu"]} ${menuOpen ? styles["mobile-menu--open"] : ""}`}
      >
        <div className={styles["mobile-menu__header"]}>
          <Link
            href="/"
            className={styles["header__logo"]}
            aria-label="Geco Home"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="116"
              height="30"
              viewBox="0 0 233 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_logo_mobile)">
                <path
                  d="M143.431 60C134.757 60 127.589 57.1055 121.914 51.3476C116.27 45.5711 113.445 38.4625 113.445 30.0031C113.445 21.5437 116.27 14.3542 121.914 8.60255C127.582 2.86959 134.75 0 143.431 0C148.651 0 153.467 1.20137 157.897 3.65391C162.321 6.10022 165.756 9.42421 168.239 13.5823L158.439 19.2717C156.989 16.6947 154.954 14.6716 152.335 13.2151C149.696 11.7585 146.728 11.0302 143.431 11.0302C137.837 11.0302 133.307 12.8042 129.885 16.3025C126.45 19.8195 124.739 24.3822 124.739 29.9907C124.739 35.5991 126.45 40.0747 129.885 43.5917C133.307 47.1086 137.837 48.864 143.431 48.864C146.728 48.864 149.703 48.1482 152.366 46.6729C155.035 45.2225 157.057 43.2306 158.445 40.7034L168.245 46.3928C165.762 50.5758 162.334 53.8749 157.941 56.315C153.548 58.7675 148.713 59.9938 143.437 59.9938"
                  fill="#8BD40A"
                />
                <path
                  d="M224.264 51.2915C218.446 57.1054 211.353 59.9937 203.04 59.9937C194.727 59.9937 187.627 57.0992 181.853 51.2915C176.054 45.5025 173.154 38.3939 173.154 29.9968C173.154 21.5996 176.054 14.4786 181.853 8.68958C187.634 2.88814 194.715 -0.00634766 203.04 -0.00634766C211.365 -0.00634766 218.446 2.88192 224.264 8.68958C230.082 14.4723 233 21.581 233 29.9968C233 38.4126 230.082 45.5025 224.264 51.2915ZM189.78 43.5542C193.352 47.0961 197.782 48.8763 203.034 48.8763C208.285 48.8763 212.691 47.0961 216.275 43.5542C219.853 40.0061 221.626 35.4807 221.626 30.003C221.626 24.5252 219.846 19.9688 216.275 16.3958C212.697 12.8228 208.285 11.0363 203.034 11.0363C197.782 11.0363 193.352 12.8166 189.78 16.3958C186.215 19.9688 184.429 24.5003 184.429 30.003C184.429 35.5056 186.215 40.0061 189.78 43.5542Z"
                  fill="#8BD40A"
                />
                <path
                  d="M40.0965 27.843V27.8555C29.3692 27.9177 27.4092 37.9021 27.4092 37.9021H47.7872C46.7419 41.3133 44.7694 43.9961 41.9009 45.9507C39.0013 47.8866 35.3551 48.8763 30.9746 48.8763C25.0385 48.8763 20.2785 47.0961 16.682 43.5542C13.0855 40.0061 11.281 35.5181 11.281 30.0715C11.281 24.6248 13.0544 20.031 16.5949 16.4393C20.1353 12.8477 24.659 11.0363 30.1408 11.0363C33.5568 11.0363 36.6555 11.777 39.4058 13.2647C42.1872 14.7338 44.2716 16.6759 45.6343 19.035L55.3597 13.4204C52.8771 9.34939 49.4299 6.10632 44.9747 3.65378C40.5196 1.20125 35.6102 -0.00634766 30.2279 -0.00634766C21.6598 -0.00634766 14.4855 2.89437 8.6801 8.7207C2.91203 14.5595 0 21.6681 0 30.0715C0 38.4748 2.92448 45.5025 8.77343 51.2977C14.6286 57.1116 22.0207 59.9999 30.9061 59.9999C39.2378 59.9999 46.0636 57.4415 51.3339 52.331C56.6167 47.233 59.2362 40.5414 59.2362 32.3248V27.8492H40.0965V27.843Z"
                  fill="#8BD40A"
                />
                <path
                  d="M100.41 47.9674H77.8662V35.0263H105.792V24.3197H77.8662V12.0446H100.011C106.7 11.7707 107.727 5.3406 107.864 2.48968V1.15137H66.498V58.842H108.25C108.25 58.842 109.003 48.3098 100.403 47.9674"
                  fill="#8BD40A"
                />
              </g>
              <defs>
                <clipPath id="clip0_logo_mobile">
                  <rect width="233" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <button
            className={styles["mobile-menu__close"]}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
                      style={{
                        transform: mobileProductsOpen
                          ? "rotate(180deg)"
                          : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
                          href={`/products/category/${cat.slug}`}
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
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Search Backdrop */}
      <div
        className={`${styles["search-backdrop"]} ${searchOpen ? styles["search-backdrop--open"] : ""}`}
        onClick={() => setSearchOpen(false)}
      />
      {/* Search Overlay */}
      <div
        className={`${styles["search-overlay"]} ${searchOpen ? styles["search-overlay--open"] : ""}`}
      >
        <div className={styles["search-overlay__header"]}>
          <div className={styles["search-overlay__input-wrapper"]}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.35 21.0004L17 16.6504" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles["search-overlay__input"]}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  setSearchOpen(false);
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
                }
              }}
            />
          </div>
          <button
            className={styles["search-overlay__close"]}
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
            aria-label="Close search"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles["search-overlay__divider"]} />
        <div className={styles["search-overlay__body"]}>
          {searchQuery.trim() ? (
            (() => {
              const q = searchQuery.toLowerCase().trim();
              const results = products.filter(
                (p) =>
                  p.name?.toLowerCase().includes(q) ||
                  p.category?.toLowerCase().includes(q)
              );
              return results.length > 0 ? (
                <div className={styles["search-overlay__results"]}>
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className={styles["search-overlay__result"]}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    >
                      {product.imageUrl && (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className={styles["search-overlay__result-img"]}
                        />
                      )}
                      <div className={styles["search-overlay__result-info"]}>
                        <span className={styles["search-overlay__result-category"]}>{product.category}</span>
                        <span className={styles["search-overlay__result-name"]}>{product.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className={styles["search-overlay__empty"]}>No results found for &ldquo;{searchQuery}&rdquo;</p>
              );
            })()
          ) : (
            <p className={styles["search-overlay__empty"]}>Start typing to search products.</p>
          )}
        </div>
      </div>
    </header>
  );
}
