export const defaultState = {
  animate: { opacity: 1 },
  stop: { opacity: 1 },
};

export const line1 = {
  animate: {
    rotate: 42,
    y: 10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  stop: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const line2 = {
  animate: {
    rotate: -42,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  stop: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
export const line3 = {
  animate: {
    x: -30,
    opacity: 0,
    transition: { ease: "easeOut" },
  },
  stop: {
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fade = {
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  stop: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
