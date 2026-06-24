import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
});

export const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
});

export const slideInRight = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
});

export const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  pauseOnHover: false,
};
