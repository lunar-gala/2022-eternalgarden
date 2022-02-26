import 'routes/home/index.scss';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
  
// import useWindowSize, { Size } from 'hooks/useWindowSize';
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

  // use window size to make preloader dimensions better
  // const size: Size = useWindowSize();
  // const aspectRatio = size.width / size.height;

  // create fake preloading experience wew
  useEffect(() => {
    let timer;
    if (location.state?.previousLocation) {
      setLoading(false);
      controls.set('show');
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
          transition={buttonTransition1}
        >
          <Button>
            Explore
          </Button>
        </motion.div>
      </Link>
      <motion.div
        className="home-nav-right"
        variants={buttonVariants}
        initial="loading"
        animate={controls}
        exit="loading"
        transition={buttonTransition2}
      >
        <Button onClick={() => console.log('Link to tickets')}>
          Tickets
        </Button>
      </motion.div>
      <motion.div
        className="home-main"
        variants={container}
        initial="loading"
        animate={controls}
        transition={containerTransition}
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
      {loading && (
        <motion.div className="progress">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
