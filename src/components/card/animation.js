const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
      staggerDirection: 1,
    },
  },
};

const item = {
  lineList: {
    opacity: 1,
  },
  lineOpen: {
    opacity: 0,
  },
};

const firstItem = {
  ...item,
  lineList: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

export { items, item, firstItem };
