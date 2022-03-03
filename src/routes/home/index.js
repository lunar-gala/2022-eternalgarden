import 'routes/home/index.scss';

import { useState, useEffect } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize, { Size } from 'hooks/useWindowSize';
import logo from 'assets/images/logo.svg';
import Button from 'components/button';
import {
  container,
  containerMobile,
  buttonVariants,
  buttonTransition1,
  buttonTransition2,
  logoVariants,
  flowerVariants,
  menuTransition,
  preloaderTransition,
} from 'routes/home/animation';
import Lottie from 'react-lottie';
import animationData from 'assets/home_animation/test.json';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const location = useLocation();
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  // determine preloader arch width
  const size = useWindowSize();
  const aspectRatio = useMotionValue(1);
  const aspectRatioRange = [0.5625, 1, 4.83];
  const clipRange = [38, 44, 48];
  const clipWidth = useTransform(aspectRatio, aspectRatioRange, clipRange);

  // isMobile
  const isMobile = size?.width < 1000;
  console.log('isMobile = ', isMobile);

  // listen for aspect ratio size
  useEffect(() => {
    if (size && size.width && size.height) {
      aspectRatio.set(size.width / size.height);
      console.log('real aspect ratio', size.width / size.height);
    }
    console.log(
      'Aspect Ratio',
      aspectRatio.get() + '\n',
      'Clip width',
      clipWidth.get() + '\n',
      'Size',
      size.width,
      size.height + '\n',
    );
  }, [size, size.width, size.height, aspectRatio, clipWidth]);

  // create fake preloading experience wew
  useEffect(() => {
    let timer;
    if (location.state?.previousLocation) {
      setLoading(false);
      controls.start('show');
    } else {
      timer = setTimeout(() => {
        setLoading(false);
        controls.start('show');
      }, 3000);
    }

    // cleanup timer on unmount
    return () => {
      timer && clearTimeout(timer);
    };
  }, [controls]);

  console.log(loading);
  // console.log(loading);
  return (
    <motion.div className="home">
      <Link to="/menu" state={{ previousLocation: '/' }}>
        <motion.div
          className="home-nav-left"
          variants={buttonVariants}
          initial="loading"
          animate={controls}
          exit="loading"
          transition={{
            ...buttonTransition1,
            delay: loading ? buttonTransition1.delay : 0,
          }}
        >
          <Button>Explore</Button>
        </motion.div>
      </Link>
      <motion.div
        className="home-nav-right"
        variants={buttonVariants}
        initial="loading"
        animate={controls}
        exit="loading"
        transition={{
          ...buttonTransition2,
          delay: loading ? buttonTransition2.delay : 0.4,
        }}
      >
        <Button>
          <a
            href="https://carnegiemellontickets.universitytickets.com/w/event.aspx?id=2150&p=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        </Button>
      </motion.div>
      <motion.div
        className="home-main"
        variants={isMobile ? containerMobile : container}
        initial={location.state?.previousLocation ? 'exit' : 'loading'}
        animate={controls}
        exit="exit"
        transition={{
          ...preloaderTransition,
          ...menuTransition,
          ease:
            location.state?.previousLocation == undefined
              ? preloaderTransition.ease
              : menuTransition.ease,
        }}
      >
        <motion.img
          className="home-logo"
          src={logo}
          alt="logo"
          variants={logoVariants}
          initial="loading"
          animate={controls}
          exit="loading"
          transition={{
            ...preloaderTransition,
            ...menuTransition,
            ease:
              location.state?.previousLocation == undefined
                ? preloaderTransition.ease
                : menuTransition.ease,
          }}
        />
        <motion.div
          variants={flowerVariants}
          initial="loading"
          exit="loading"
          animate={controls}
          className="home-flowers"
          alt="flowers"
          transition={{
            ...preloaderTransition,
            ...menuTransition,
            ease:
              location.state?.previousLocation == undefined
                ? preloaderTransition.ease
                : menuTransition.ease,
            duration: 1,
          }}
        >
          <Lottie options={defaultOptions} />
        </motion.div>
        {/* noise on top of flowers + logo, so it is last */}
        <div className="noise" />
      </motion.div>
      {loading && !location.state?.previousLocation && (
        <motion.div className="progress">
          <motion.div
            className="progress-bar"
            initial={{
              width: 0,
            }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
