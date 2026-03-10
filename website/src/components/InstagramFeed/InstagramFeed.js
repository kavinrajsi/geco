import Image from "next/image";
import styles from "./InstagramFeed.module.scss";

const posts = [
  { id: 1, image: "/images/instagram/1.png" },
  { id: 2, image: "/images/instagram/2.png" },
  { id: 3, image: "/images/instagram/3.png" },
  { id: 4, image: "/images/instagram/4.png" },
  { id: 5, image: "/images/instagram/5.png" },
];

export default function InstagramFeed() {
  return (
    <section className={styles["instagram"]}>
      <div className={styles["instagram__header"]}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["instagram__icon"]}
        >
          <path
            d="M12 7.08C9.28 7.08 7.08 9.27 7.08 12C7.08 14.72 9.28 16.92 12 16.92C14.73 16.92 16.92 14.72 16.92 12C16.92 9.27 14.73 7.08 12 7.08ZM12 15.2C10.24 15.2 8.8 13.76 8.8 12C8.8 10.23 10.24 8.8 12 8.8C13.77 8.8 15.2 10.23 15.2 12C15.2 13.76 13.76 15.2 12 15.2ZM18.27 6.88C18.27 7.51 17.76 8.02 17.13 8.02C16.49 8.02 15.98 7.51 15.98 6.88C15.98 6.24 16.49 5.73 17.13 5.73C17.76 5.73 18.27 6.24 18.27 6.88ZM21.53 8.04C21.46 6.5 21.11 5.14 19.98 4.02C18.86 2.9 17.5 2.54 15.96 2.47C14.38 2.38 9.63 2.38 8.04 2.47C6.51 2.54 5.14 2.89 4.02 4.01C2.89 5.14 2.54 6.5 2.47 8.04C2.38 9.62 2.38 14.37 2.47 15.96C2.54 17.49 2.89 18.86 4.02 19.98C5.14 21.1 6.5 21.45 8.04 21.53C9.63 21.62 14.38 21.62 15.96 21.53C17.5 21.46 18.86 21.1 19.98 19.98C21.1 18.86 21.46 17.49 21.53 15.96C21.62 14.37 21.62 9.63 21.53 8.04ZM19.49 17.66C19.15 18.5 18.5 19.14 17.66 19.48C16.4 19.98 13.4 19.87 12 19.87C10.61 19.87 7.6 19.98 6.34 19.48C5.5 19.15 4.86 18.5 4.52 17.66C4.02 16.39 4.13 13.39 4.13 12C4.13 10.6 4.02 7.6 4.52 6.34C4.85 5.5 5.5 4.85 6.34 4.52C7.61 4.01 10.61 4.13 12 4.13C13.4 4.13 16.4 4.02 17.66 4.52C18.5 4.85 19.15 5.5 19.49 6.34C19.99 7.6 19.87 10.6 19.87 12C19.87 13.39 19.99 16.4 19.49 17.66Z"
            fill="#1f1f1f"
          />
        </svg>
        <h2 className={styles["instagram__title"]}>Follow Us on Instagram</h2>
      </div>
      <div className={styles["instagram__grid"]}>
        {posts.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["instagram__post"]}
          >
            <Image
              src={post.image}
              alt="Instagram post"
              width={300}
              height={300}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
