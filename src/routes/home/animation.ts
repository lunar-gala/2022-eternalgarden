// framer motion variants
const container = {
  loading: {
    clipPath: 'inset(40% 40% 40% 40% round 350px 350px 0% 0%)',
  },
  show: {
    clipPath: 'inset(8% 2% 0% 2% round 300px 300px 0% 0%)',
  },
  exit: {
    clipPath: 'inset(100% 2% 0% 2% round 300px 300px 0% 0%)',
  },
};

const containerTransition = {
  duration: 1,
  ease: [0.85, 0, 0.15, 1],
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

export {
  container,
  containerTransition,
  buttonVariants,
  buttonTransition1,
  buttonTransition2,
  logoVariants,
};
