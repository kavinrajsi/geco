"use client";

import styles from "./ShareButtons.module.scss";

export default function ShareButtons({ title }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || "");

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="11.5"
            stroke="#E9E9E9"
          />
          <path
            d="M27.5096 17.32H29.5V14.14C28.5363 14.0454 27.568 13.9986 26.5991 14C23.7194 14 21.7502 15.66 21.7502 18.7V21.32H18.5V24.88H21.7502V34H25.6463V24.88H28.8859L29.373 21.32H25.6463V19.05C25.6463 18 25.9427 17.32 27.5096 17.32Z"
            fill="#1F1F1F"
          />
        </svg>
      ),
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="11.5"
            stroke="#E9E9E9"
          />
          <path
            d="M25.905 22.4695L33.3512 14H31.5869L25.1184 21.3524L19.9558 14H14L21.8086 25.1192L14 34H15.7643L22.591 26.2338L28.0442 34H34L25.905 22.4695ZM23.4877 25.2168L22.6954 24.1089L16.4005 15.3015H19.1108L24.1925 22.412L24.9815 23.5199L31.5861 32.7619H28.8758L23.4877 25.2168Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="11.5"
            stroke="#E9E9E9"
          />
          <g clip-path="url(#clip0_5_7171)">
            <path
              d="M31.0867 16.9038C29.2843 15.1098 26.7944 14 24.0439 14C18.5435 14 14.0838 18.4384 14.0838 23.914C14.0838 25.736 14.5776 27.4427 15.4386 28.91L15.4131 28.8633L14 34L19.2792 32.6214C20.6535 33.3811 22.2931 33.8279 24.0379 33.8279H24.0419C29.5422 33.8259 34 29.3868 34 23.912C34 21.1755 32.8864 18.6985 31.086 16.9045L31.0867 16.9038ZM24.0419 32.1533H24.0385C22.4847 32.1533 21.0301 31.7264 19.7885 30.9841L19.826 31.0048L19.5238 30.8267L16.3914 31.6451L17.2269 28.6045L17.0299 28.2931C16.2359 27.0512 15.7642 25.5379 15.7642 23.9146C15.7642 19.3648 19.4702 15.676 24.0412 15.676C28.6122 15.676 32.3182 19.3648 32.3182 23.9146C32.3182 28.4645 28.6136 32.1533 24.0419 32.1533ZM28.5821 25.9835C28.3335 25.8594 27.11 25.2612 26.8822 25.1778C26.6537 25.0951 26.4875 25.0544 26.3214 25.3025C26.1565 25.55 25.6795 26.1075 25.5341 26.2729C25.3893 26.439 25.2433 26.459 24.9947 26.3356C24.2241 26.0248 23.5621 25.6106 22.9866 25.1004L22.9933 25.1064C22.4579 24.6129 21.9989 24.048 21.6284 23.4251L21.6096 23.3904C21.4649 23.143 21.5942 23.0089 21.7182 22.8856C21.8301 22.7748 21.9674 22.5961 22.0914 22.452C22.1892 22.3327 22.273 22.1959 22.3366 22.0492L22.3406 22.0379C22.3695 21.9799 22.3862 21.9125 22.3862 21.8405C22.3862 21.7531 22.3614 21.6717 22.3185 21.6024L22.3199 21.6044C22.2569 21.4803 21.7597 20.2612 21.5527 19.765C21.3503 19.2821 21.1446 19.3481 20.9925 19.3401C20.8478 19.3335 20.6816 19.3321 20.5155 19.3321C20.2508 19.3388 20.0156 19.4575 19.8535 19.6409L19.8528 19.6423C19.3154 20.1498 18.9817 20.8654 18.9817 21.6584C18.9817 21.6757 18.9817 21.6937 18.9824 21.7111V21.7084C19.0702 22.6868 19.4387 23.5652 20.0056 24.2808L19.9975 24.2708C21.0723 25.8574 22.5048 27.1266 24.1859 27.9816L24.2489 28.0103C24.6161 28.1757 25.0865 28.3524 25.5676 28.5038L25.6674 28.5311C25.9636 28.6245 26.3046 28.6785 26.6584 28.6785C26.8614 28.6785 27.0611 28.6605 27.254 28.6265L27.2333 28.6292C27.9495 28.4805 28.5439 28.0503 28.9064 27.4627L28.9124 27.4514C29.0229 27.2073 29.0873 26.9225 29.0873 26.623C29.0873 26.4997 29.0766 26.379 29.0558 26.2616L29.0578 26.2742C28.9961 26.1709 28.83 26.1095 28.5807 25.9848L28.5821 25.9835Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_7171">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(14 14)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="11.5"
            stroke="#E9E9E9"
          />
          <g clip-path="url(#clip0_5_7174)">
            <path
              d="M16.4038 14.0171C15.0754 14.0171 14.0002 15.0942 14 16.4196C14 17.7463 15.0752 18.8232 16.404 18.8232C17.7292 18.8232 18.8059 17.7463 18.8059 16.4196C18.8059 15.094 17.729 14.0171 16.4038 14.0171Z"
              fill="black"
            />
            <path
              d="M18.4771 20.6465H14.332V33.9828H18.4771V20.6465Z"
              fill="black"
            />
            <path
              d="M29.0272 20.3147C27.0108 20.3147 25.6588 21.4202 25.1054 22.4686H25.0499V20.6463H21.0744H21.0742V33.9824H25.2156V27.385C25.2156 25.6457 25.5468 23.9609 27.7033 23.9609C29.8288 23.9609 29.8572 25.9502 29.8572 27.4965V33.9822H33.9992V26.6674C33.9992 23.0768 33.2244 20.3147 29.0272 20.3147Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_7174">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(14 14)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: (
        <svg
          width="54"
          height="48"
          viewBox="0 0 54 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="52.7143"
            height="47"
            rx="11.5"
            fill="white"
          />
          <rect
            x="0.5"
            y="0.5"
            width="52.7143"
            height="47"
            rx="11.5"
            stroke="#E9E9E9"
          />
          <path
            d="M15.4297 16.4285L26.8583 24.857L38.2868 16.4285"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.8571 14H16.8571C15.2792 14 14 15.2792 14 16.8571V31.1429C14 32.7208 15.2792 34 16.8571 34H36.8571C38.4351 34 39.7143 32.7208 39.7143 31.1429V16.8571C39.7143 15.2792 38.4351 14 36.8571 14Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles["share"]}>
      <span className={styles["share__label"]}>Share :</span>
      <div className={styles["share__icons"]}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={styles["share__icon"]}
            aria-label={`Share on ${link.label}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
