import Image from "next/image";
import InstagramSlider from "./InstagramSlider";
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
        <h2 className={styles["instagram__title"]}>Geco On Instagram</h2>
        <p className={styles["instagram__subtitle"]}>#Geco</p>
      </div>

      {/* Slider for < 1200px */}
      <InstagramSlider posts={posts} />

      {/* Grid for >= 1200px */}
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
              width={384}
              height={479}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
