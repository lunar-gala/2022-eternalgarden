// framer motion variants
const container = {
  loading: {
    // clipPath: 'inset($spacing-10 $spacing-5 $spacing-5 $spacing-5 round 300px 300px 0% 0%)'
    // clipPath: 'path("M0 95.5C0 42.7568 42.7568 0 95.5 0C148.243 0 191 42.7568 191 95.5V340H0V95.5Z")'
    clipPath: 'inset(40% 40% 40% 40% round 350px 350px 0% 0%)',
  },
  show: {
    clipPath: 'inset(8% 2% 2% 2% round 300px 300px 0% 0%)',
  },
};

const containerTransition = {
  duration: 1,
  ease: [0.85, 0, 0.15, 1],
};

const buttonVariants = {
  loading: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

const buttonTransition1 = {
  duration: 1,
  ease: 'easeOut',
  delay: 1,
};

const buttonTransition2 = {
  duration: 1,
  ease: 'easeOut',
  delay: 1.2,
};

const logoVariants = {
  loading: {
    scale: 0.3,
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
