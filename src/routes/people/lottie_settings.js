import rose from 'assets/people_animation/rosegroup/rosegroup.json';
import roseSingle from 'assets/people_animation/rosesingle/rosesingle.json';
import roundFlower from 'assets/people_animation/roundflower/roundflower.json';
import sunflower from 'assets/people_animation/sunflower/sunflower.json';
import groupPurpleFlower from 'assets/about_animation/group_purpleflower/group_purpleflower.json';

//lottieAnimation settings
const groupPurpleFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: groupPurpleFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roseSettings = {
  loop: true,
  autoplay: true,
  animationData: rose,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roseSingleSettings = {
  loop: true,
  autoplay: true,
  animationData: roseSingle,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roundFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: roundFlower,
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

export {
  groupPurpleFlowerSettings,
  roseSettings,
  roseSingleSettings,
  roundFlowerSettings,
  sunflowerSettings,
};
