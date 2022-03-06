const transition = {
  duration: 1,
  ease: 'easeOut',
};

const button = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const container = {
  hidden: {
    opacity: 0,
    duration: 0.1,
  },
  visible: {
    opacity: 1,
    duration: 0.1,
  },
};

export { transition, button, container };
