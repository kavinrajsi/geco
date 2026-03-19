import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./WatchOurStories.module.scss";

export default function WatchOurStories({ title, subtitle, videoUrl, videoSrc, poster }) {
  if (!videoUrl && !videoSrc) return null;

  return (
    <section className={styles["stories"]}>
      <SectionTitle
        title={title || "Watch Our Stories"}
        description={subtitle}
        className={styles["stories__header"]}
      />
      <div className={styles["stories__video"]}>
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <iframe
            src={videoUrl}
            title={title || "Watch Our Stories"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}
