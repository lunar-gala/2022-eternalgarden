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
import { ReactComponent as LGLogo } from 'assets/icons/white-lg-logo.svg';
import Button from 'components/button';
import NavBar from 'components/navbar';
import {
  buttonVariants,
  buttonTransition1,
  buttonTransition2,
  logoVariants,
  flowerVariants,
  menuTransition,
  preloaderTransition,
  subheader,
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
  const isMobile = size?.width < 768;
  console.log('isMobile = ', isMobile);

  const containerVariants = {
    loading: {
      clipPath: `inset(40% 44% 40% 44% round ${0.059 * size?.width}px ${
        0.059 * size?.width
      }px 0% 0%)`,
    },
    show: {
      clipPath: `inset(4% 2% 0% 2% round 300px 300px 0% 0%)`,
    },
    exit: {
      clipPath: `inset(100% 2% 0% 2% round 300px 300px 0% 0%)`,
    },
  };
  const mobileContainerVariants = {
    loading: {
      clipPath: `inset(40% 38% 40% 38% round ${0.12 * size?.width}px ${
        0.12 * size?.width
      }px 0% 0%)`,
    },
    show: {
      clipPath: `inset(8% 2% 0% 2% round ${0.47 * size?.width}px ${
        0.47 * size?.width
      }px 0% 0%)`,
    },
    exit: {
      clipPath: `inset(100% 2% 0% 2% round ${0.47 * size?.width}px ${
        0.47 * size?.width
      }px 0% 0%)`,
    },
  };
  console.log('loadingInset', containerVariants);

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
      }, 2000);
    }

    // cleanup timer on unmount
    return () => {
      timer && clearTimeout(timer);
    };
  }, [controls]);

  console.log(loading);
  return (
    <div className="homeContainer">
      <motion.div className="home">
        {/* <NavBar prevLoc=""></NavBar> */}
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
          variants={isMobile ? mobileContainerVariants : containerVariants}
          initial={location.state?.previousLocation ? 'exit' : 'loading'}
          animate={controls}
          exit="exit"
          transition={{
            duration: 1,
            ease:
              location.state?.previousLocation === undefined
                ? preloaderTransition.ease
                : menuTransition.ease,
          }}
        >
          <motion.div
            className="home-logo"
            variants={logoVariants}
            initial="loading"
            animate={controls}
            exit="loading"
            transition={{
              duration: 1,
              ease:
                location.state?.previousLocation === undefined
                  ? preloaderTransition.ease
                  : menuTransition.ease,
            }}
          >
            <motion.img src={logo} alt="logo" />

            <motion.h5 className={loading ? '' : ' showSubheader'}>
              Carnegie Music Hall ??? March 20 7:30pm EST
            </motion.h5>
          </motion.div>
          <div
            className={
              loading ? 'LG-logo-container' : 'LG-logo-container showSubheader'
            }
          >
            <LGLogo style={{ width: '35px' }}></LGLogo>
          </div>
          <motion.div
            variants={flowerVariants}
            initial="loading"
            animate={controls}
            exit="loading"
            className="home-flowers"
            alt="flowers"
            transition={{
              ...preloaderTransition,
              ...menuTransition,
              ease:
                location.state?.previousLocation === undefined
                  ? preloaderTransition.ease
                  : menuTransition.ease,
              duration: 1,
            }}
          >
            <Lottie options={defaultOptions} />
          </motion.div>
          {/* noise on top of flowers + logo, so it is last */}
          <motion.div
            className="noise"
            variants={isMobile ? mobileContainerVariants : containerVariants}
            initial={location.state?.previousLocation ? 'exit' : 'loading'}
            animate={controls}
            exit="exit"
            transition={{
              duration: 1,
              ease:
                location.state?.previousLocation === undefined
                  ? preloaderTransition.ease
                  : menuTransition.ease,
            }}
          />
        </motion.div>
        {loading && !location.state?.previousLocation && (
          <motion.div className="progress">
            <motion.div
              className="progress-bar"
              initial={{
                width: 0,
              }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
