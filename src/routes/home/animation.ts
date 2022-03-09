// framer motion variants
const container = {
  loading: {
    clipPath: 'inset(40% 44% 40% 44% round 300px 300px 0% 0%)',
  },
  show: {
    clipPath: 'inset(8% 2% 0% 2% round 300px 300px 0% 0%)',
  },
  exit: {
    clipPath: 'inset(100% 2% 0% 2% round 300px 300px 0% 0%)',
  },
};

const subheader = {
  loading: {
    opacity: 0,
    background: 'yellow',
  },
  show: {
    opacity: 1,
    background: 'yellow',
  },
};

const preloaderTransition = {
  duration: 1,
  ease: [0.85, 0, 0.55, 1],
};

const menuTransition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1],
};

const buttonVariants = {
  loading: {
    scale: 0.9,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

const buttonTransition1 = {
  duration: 0.5,
  ease: 'easeOut',
  delay: 0.4,
};

const buttonTransition2 = {
  duration: 0.5,
  ease: 'easeOut',
  delay: 0.4,
};

const logoVariants = {
  loading: {
    scale: 0.25,
    top: '50%',
    y: '-50%',
    x: '-50%',
  },
  show: {
    scale: 1,

    top: '40%',
    y: '-50%',
    x: '-50%',
  },
};

const flowerVariants = {
  loading: {
    bottom: '-60vw',
  },
  show: {
    bottom: '-50vw',
  },
};

export {
  container,
  subheader,
  buttonVariants,
  buttonTransition1,
  buttonTransition2,
  logoVariants,
  flowerVariants,
  menuTransition,
  preloaderTransition,
};
