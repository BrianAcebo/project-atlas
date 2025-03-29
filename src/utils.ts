import type { MouseEventHandler } from "react";

export const smoothScroll: MouseEventHandler<HTMLAnchorElement> = (
  e: React.MouseEvent<HTMLAnchorElement>,
) => {
  e.preventDefault();

  const currentTarget = e.currentTarget as HTMLAnchorElement;
  const anchorId = new URL(currentTarget.href).hash.replace("#", "");
  const targetEl = document.getElementById(anchorId);
  const topNav = document.querySelector("header");

  if (!targetEl || !topNav) return;

  window.scrollTo({
    top:
      window.scrollY +
      targetEl.getBoundingClientRect().top +
      10 -
      topNav.offsetHeight,
    behavior: "smooth",
  });
};

const animateSlowScroll = (element: Element, duration: number) => {
  const topNav = document.querySelector("header");
  if (!topNav) return;

  const start = window.scrollY;
  const target =
    element.getBoundingClientRect().top + start + 10 - topNav.offsetHeight;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
    window.scrollTo(0, start + (target - start) * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export const slowScroll: MouseEventHandler<HTMLAnchorElement> = (
  e: React.MouseEvent<HTMLAnchorElement>,
) => {
  e.preventDefault();

  const currentTarget = e.currentTarget as HTMLAnchorElement;
  const anchorId = new URL(currentTarget.href).hash.replace("#", "");
  const targetEl = document.getElementById(anchorId);

  if (!targetEl) return;
  animateSlowScroll(targetEl, 750);
};
