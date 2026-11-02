import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

import styles from "./backgroundVideo.module.css";

export function BackgroundVideo({ targetRef }) {
  const videoRef = useRef(null);
  const frameRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.88, 1], [1, 1, 0]);

  const updateVideo = (progress) => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;

      const video = videoRef.current;

      if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      const duration = Math.max(0, video.duration - 1 / 24);
      const time = Math.max(0, Math.min(progress, 1)) * duration;

      if (Math.abs(video.currentTime - time) >= 1 / 24) {
        video.currentTime = time;
      }
    });
  };

  useMotionValueEvent(scrollYProgress, "change", updateVideo);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className={styles.background}
      style={{ opacity }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className={styles.video}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={() => updateVideo(scrollYProgress.get())}
      >
        <source src="/videos/hero_video_scroll.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
