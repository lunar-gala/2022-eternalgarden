//lottie files
import purple3flower from 'assets/lines_animation/purple3flower.json';
import maxBud from 'assets/lines_animation/maxbud.json';
import sunflower from 'assets/lines_animation/sunflower.json';
import dragonfly from 'assets/lines_animation/dragonfly.json';
import pointyflower from 'assets/lines_animation/pointyflower.json';

const flower = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const purple3flowerSettings = {
  loop: true,
  autoplay: true,
  animationData: purple3flower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const dragonflySettings = {
  loop: true,
  autoplay: true,
  animationData: dragonfly,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const maxBudSettings = {
  loop: true,
  autoplay: true,
  animationData: maxBud,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const sunflowerSettings = {
  loop: true,
  autoplay: true,
  animationData: sunflower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const pointyflowerSettings = {
  loop: true,
  autoplay: true,
  animationData: pointyflower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export {
  flower,
  purple3flowerSettings,
  dragonflySettings,
  maxBudSettings,
  sunflowerSettings,
  pointyflowerSettings,
};
