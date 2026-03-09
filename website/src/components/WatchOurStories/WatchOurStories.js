import styles from "./WatchOurStories.module.scss";

export default function WatchOurStories({ title, subtitle, videoUrl, videoSrc, poster }) {
  if (!videoUrl && !videoSrc) return null;

  return (
    <section className={styles["stories"]}>
      <div className={styles["stories__header"]}>
        <h2 className={styles["stories__title"]}>{title || "Watch Our Stories"}</h2>
        {subtitle && (
          <p className={styles["stories__subtitle"]}>{subtitle}</p>
        )}
      </div>
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
