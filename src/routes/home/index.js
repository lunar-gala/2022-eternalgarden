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
import flowers from 'assets/images/main-flower.svg';
import Button from 'components/button';
import {
  container,
  containerTransition,
  buttonVariants,
  buttonTransition1,
  buttonTransition2,
  logoVariants,
} from 'routes/home/animation';

export default function Home() {
  const location = useLocation();
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  // determine preloader arch width
  const size = useWindowSize();
  const aspectRatio = useMotionValue(1);
  const aspectRatioRange = [0.5625, 1, 4.83];
  const clipRange = [38, 44, 48];
  const clipWidth = useTransform(aspectRatio, aspectRatioRange, clipRange);

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
        variants={{
          ...container,
          loading: {
            clipPath: `inset(40% ${clipWidth.get()}% 40% ${clipWidth.get()}% round 350px 350px 0% 0%)`,
          },
        }}
        initial={location.state?.previousLocation ? 'exit' : 'loading'}
        animate={controls}
        exit="exit"
        transition={{ ...containerTransition, delay: loading ? 0 : 0 }}
      >
        <motion.img
          className="home-logo"
          src={logo}
          alt="logo"
          variants={logoVariants}
          transition={containerTransition}
          initial="loading"
          animate={controls}
        />
        <img className="home-flowers" src={flowers} alt="flowers" />
        {/* noise on top of flowers + logo, so it is last */}
        <div className="noise" />
      </motion.div>
      {loading && !location.state?.previousLocation && (
        <motion.div
          className="progress"
          style={{ left: `${clipWidth.get()}%`, right: `${clipWidth.get()}%` }}
        >
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
