import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__wrapper"]}>
          {/* Brand + Contact */}
          <div className={styles["footer__brand"]}>
            <Link href="/" className={styles["footer__logo"]}>
     
            </Link>
            <div className={styles["footer__contact"]}>
              <a
                href="mailto:contactus@vncgroup.com"
                className={styles["footer__contact-item"]}
              >
                <Image src="/icons/email.svg" alt="" width={24} height={24} />
                <span>contactus@vncgroup.com</span>
              </a>
              <a
                href="tel:18005993939"
                className={styles["footer__contact-item"]}
              >
                <Image src="/icons/phone.svg" alt="" width={24} height={24} />
                <span>1800 599 3939</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles["footer__nav"]}>
            <details className={styles["footer__accordion"]}>
              <summary className={styles["footer__links-title"]}>
                <span className={styles["footer__accordion-text"]}>
                  Information
                </span>
                <svg
                  className={styles["footer__accordion-icon"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.64689 4.64598C1.69334 4.59941 1.74852 4.56247 1.80926 4.53727C1.87001 4.51206 1.93513 4.49908 2.00089 4.49908C2.06666 4.49908 2.13178 4.51206 2.19253 4.53727C2.25327 4.56247 2.30845 4.59941 2.35489 4.64598L8.00089 10.293L13.6469 4.64598C13.6934 4.59949 13.7486 4.56261 13.8093 4.53745C13.87 4.5123 13.9352 4.49935 14.0009 4.49935C14.0666 4.49935 14.1317 4.5123 14.1925 4.53745C14.2532 4.56261 14.3084 4.59949 14.3549 4.64598C14.4014 4.69247 14.4383 4.74766 14.4634 4.80839C14.4886 4.86913 14.5015 4.93423 14.5015 4.99998C14.5015 5.06572 14.4886 5.13082 14.4634 5.19156C14.4383 5.2523 14.4014 5.30749 14.3549 5.35398L8.35489 11.354C8.30845 11.4005 8.25327 11.4375 8.19253 11.4627C8.13178 11.4879 8.06666 11.5009 8.00089 11.5009C7.93513 11.5009 7.87001 11.4879 7.80926 11.4627C7.74852 11.4375 7.69334 11.4005 7.64689 11.354L1.64689 5.35398C1.60033 5.30753 1.56339 5.25236 1.53818 5.19161C1.51297 5.13087 1.5 5.06575 1.5 4.99998C1.5 4.93421 1.51297 4.86909 1.53818 4.80834C1.56339 4.7476 1.60033 4.69242 1.64689 4.64598Z"
                    fill="#fff"
                  />
                </svg>
              </summary>
              <div className={styles["footer__links"]}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/contact-us">Contact</Link>
              </div>
            </details>

            <details className={styles["footer__accordion"]}>
              <summary className={styles["footer__links-title"]}>
                <span className={styles["footer__accordion-text"]}>
                  Products
                </span>
                <svg
                  className={styles["footer__accordion-icon"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.64689 4.64598C1.69334 4.59941 1.74852 4.56247 1.80926 4.53727C1.87001 4.51206 1.93513 4.49908 2.00089 4.49908C2.06666 4.49908 2.13178 4.51206 2.19253 4.53727C2.25327 4.56247 2.30845 4.59941 2.35489 4.64598L8.00089 10.293L13.6469 4.64598C13.6934 4.59949 13.7486 4.56261 13.8093 4.53745C13.87 4.5123 13.9352 4.49935 14.0009 4.49935C14.0666 4.49935 14.1317 4.5123 14.1925 4.53745C14.2532 4.56261 14.3084 4.59949 14.3549 4.64598C14.4014 4.69247 14.4383 4.74766 14.4634 4.80839C14.4886 4.86913 14.5015 4.93423 14.5015 4.99998C14.5015 5.06572 14.4886 5.13082 14.4634 5.19156C14.4383 5.2523 14.4014 5.30749 14.3549 5.35398L8.35489 11.354C8.30845 11.4005 8.25327 11.4375 8.19253 11.4627C8.13178 11.4879 8.06666 11.5009 8.00089 11.5009C7.93513 11.5009 7.87001 11.4879 7.80926 11.4627C7.74852 11.4375 7.69334 11.4005 7.64689 11.354L1.64689 5.35398C1.60033 5.30753 1.56339 5.25236 1.53818 5.19161C1.51297 5.13087 1.5 5.06575 1.5 4.99998C1.5 4.93421 1.51297 4.86909 1.53818 4.80834C1.56339 4.7476 1.60033 4.69242 1.64689 4.64598Z"
                    fill="#fff"
                  />
                </svg>
              </summary>
              <div className={styles["footer__links"]}>
                <Link href="/products/category/tile-adhesives">
                  Tile Adhesives
                </Link>
                <Link href="/products/category/tile-grouts">Tile Grouts</Link>
                <Link href="/products/category/sealants">Sealants</Link>
                <Link href="/products/category/tapes">Tapes</Link>
              </div>
            </details>

            <details className={styles["footer__accordion"]}>
              <summary className={styles["footer__links-title"]}>
                <span className={styles["footer__accordion-text"]}>
                  Support
                </span>
                <svg
                  className={styles["footer__accordion-icon"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.64689 4.64598C1.69334 4.59941 1.74852 4.56247 1.80926 4.53727C1.87001 4.51206 1.93513 4.49908 2.00089 4.49908C2.06666 4.49908 2.13178 4.51206 2.19253 4.53727C2.25327 4.56247 2.30845 4.59941 2.35489 4.64598L8.00089 10.293L13.6469 4.64598C13.6934 4.59949 13.7486 4.56261 13.8093 4.53745C13.87 4.5123 13.9352 4.49935 14.0009 4.49935C14.0666 4.49935 14.1317 4.5123 14.1925 4.53745C14.2532 4.56261 14.3084 4.59949 14.3549 4.64598C14.4014 4.69247 14.4383 4.74766 14.4634 4.80839C14.4886 4.86913 14.5015 4.93423 14.5015 4.99998C14.5015 5.06572 14.4886 5.13082 14.4634 5.19156C14.4383 5.2523 14.4014 5.30749 14.3549 5.35398L8.35489 11.354C8.30845 11.4005 8.25327 11.4375 8.19253 11.4627C8.13178 11.4879 8.06666 11.5009 8.00089 11.5009C7.93513 11.5009 7.87001 11.4879 7.80926 11.4627C7.74852 11.4375 7.69334 11.4005 7.64689 11.354L1.64689 5.35398C1.60033 5.30753 1.56339 5.25236 1.53818 5.19161C1.51297 5.13087 1.5 5.06575 1.5 4.99998C1.5 4.93421 1.51297 4.86909 1.53818 4.80834C1.56339 4.7476 1.60033 4.69242 1.64689 4.64598Z"
                    fill="#fff"
                  />
                </svg>
              </summary>
              <div className={styles["footer__links"]}>
                <Link href="/material-estimator">Material Estimator</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </details>
          </div>

          {/* Social Links */}
          <div className={styles["footer__social"]}>
            <h4 className={styles["footer__links-title"]}>Follow Us</h4>
            <div className={styles["footer__social-icons"]}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1289 13.2004L15.6088 9.72564H12.6081V7.47077C12.6081 6.52014 13.0273 5.59352 14.3712 5.59352H15.7354V2.63514C15.7354 2.63514 14.4974 2.40039 13.3138 2.40039C10.8427 2.40039 9.22738 4.06464 9.22738 7.07739V9.72564H6.48047V13.2004H9.22738V21.6004H12.6081V13.2004H15.1289Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0025 7.07671C9.27834 7.07671 7.08099 9.27406 7.08099 11.9982C7.08099 14.7224 9.27834 16.9198 12.0025 16.9198C14.7267 16.9198 16.9241 14.7224 16.9241 11.9982C16.9241 9.27406 14.7267 7.07671 12.0025 7.07671ZM12.0025 15.1979C10.2421 15.1979 8.80289 13.763 8.80289 11.9982C8.80289 10.2335 10.2378 8.79861 12.0025 8.79861C13.7673 8.79861 15.2022 10.2335 15.2022 11.9982C15.2022 13.763 13.763 15.1979 12.0025 15.1979ZM18.2733 6.87539C18.2733 7.51361 17.7593 8.02332 17.1254 8.02332C16.4872 8.02332 15.9775 7.50933 15.9775 6.87539C15.9775 6.24146 16.4915 5.72746 17.1254 5.72746C17.7593 5.72746 18.2733 6.24146 18.2733 6.87539ZM21.5329 8.04046C21.4601 6.50274 21.1089 5.14065 19.9824 4.01842C18.8601 2.89619 17.498 2.54495 15.9603 2.46785C14.3755 2.3779 9.62529 2.3779 8.04046 2.46785C6.50703 2.54067 5.14493 2.8919 4.01842 4.01413C2.8919 5.13636 2.54495 6.49846 2.46785 8.03617C2.3779 9.621 2.3779 14.3712 2.46785 15.956C2.54067 17.4938 2.8919 18.8559 4.01842 19.9781C5.14493 21.1003 6.50274 21.4515 8.04046 21.5286C9.62529 21.6186 14.3755 21.6186 15.9603 21.5286C17.498 21.4558 18.8601 21.1046 19.9824 19.9781C21.1046 18.8559 21.4558 17.4938 21.5329 15.956C21.6229 14.3712 21.6229 9.62529 21.5329 8.04046ZM19.4855 17.6565C19.1514 18.4961 18.5046 19.1428 17.6608 19.4812C16.3972 19.9824 13.3989 19.8667 12.0025 19.8667C10.6062 19.8667 7.60356 19.9781 6.34426 19.4812C5.50473 19.1471 4.85795 18.5003 4.51957 17.6565C4.01842 16.3929 4.13407 13.3946 4.13407 11.9982C4.13407 10.6019 4.0227 7.59928 4.51957 6.33998C4.85366 5.50045 5.50045 4.85366 6.34426 4.51528C7.60784 4.01413 10.6062 4.12978 12.0025 4.12978C13.3989 4.12978 16.4015 4.01842 17.6608 4.51528C18.5003 4.84938 19.1471 5.49616 19.4855 6.33998C19.9866 7.60356 19.871 10.6019 19.871 11.9982C19.871 13.3946 19.9866 16.3972 19.4855 17.6565Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6014 21.6V14.568C21.6014 11.112 20.8574 8.47205 16.8254 8.47205C14.8814 8.47205 13.5854 9.52805 13.0574 10.536H13.0094V8.78405H9.19336V21.6H13.1774V15.24C13.1774 13.56 13.4894 11.952 15.5534 11.952C17.5934 11.952 17.6174 13.848 17.6174 15.336V21.576H21.6014V21.6Z"
                    fill="#fff"
                  />
                  <path
                    d="M2.71289 8.78406H6.69689V21.6001H2.71289V8.78406Z"
                    fill="#fff"
                  />
                  <path
                    d="M4.70439 2.40002C3.43239 2.40002 2.40039 3.43202 2.40039 4.70402C2.40039 5.97602 3.43239 7.03202 4.70439 7.03202C5.97639 7.03202 7.00839 5.97602 7.00839 4.70402C7.00839 3.43202 5.97639 2.40002 4.70439 2.40002Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_404)">
                    <path
                      d="M23.8989 6.65992C23.6229 5.61292 22.8096 4.78833 21.777 4.50849C19.9054 4 12.4004 4 12.4004 4C12.4004 4 4.89542 4 3.02375 4.50849C1.99116 4.78837 1.17791 5.61292 0.901894 6.65992C0.400391 8.55768 0.400391 12.5172 0.400391 12.5172C0.400391 12.5172 0.400391 16.4767 0.901894 18.3744C1.17791 19.4214 1.99116 20.2117 3.02375 20.4915C4.89542 21 12.4004 21 12.4004 21C12.4004 21 19.9054 21 21.777 20.4915C22.8096 20.2117 23.6229 19.4214 23.8989 18.3744C24.4004 16.4767 24.4004 12.5172 24.4004 12.5172C24.4004 12.5172 24.4004 8.55768 23.8989 6.65992ZM9.94583 16.1121V8.92225L16.2185 12.5173L9.94583 16.1121Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_404">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`${styles["footer__wrapper"]} ${styles["footer__bottom"]} `}
        >
          <div className={styles["footer__bottom-inner"]}>
            <p className={styles["footer__copyright"]}>
              &copy;VNC Electrodes. All Rights Reserved.
            </p>
            <p className={styles["footer__credit"]}>
              Made by{" "}
              <a
                href="https://madarth.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madarth &reg;
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
