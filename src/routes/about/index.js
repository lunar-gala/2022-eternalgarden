import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import styles from 'routes/about/index.module.scss';
import Button from 'components/button';

export default function About() {
  const location = useLocation();

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.navbar}>
          <Link to="/menu" state={{ previousLocation: '/about' }}>
            <Button type="white">
              Explore
            </Button>
          </Link>
          <Link to="/" state={{ previousLocation: '/about' }}>
            <Button type="white">
              Tickets
            </Button>
          </Link>
        </div>
        <h1 className={cn('h2', styles.header)}>
          ABOUT
        </h1>
        <h2 className={cn('h4', styles.subheader)}>
          EXISTENCE IS INTERDEPENDENT.
        </h2>
        <div className={styles.content}>
          <p className="body">
            Born in 1996, Lunar Gala is an annual student-run fashion show that showcases brilliant artistry in design, modeling, and production, and dance performance. The show was originally inspired by the Taiwanese Student Association’s Lunar New Year tradition of wearing new clothes. Over the years, it has evolved to become the largest fashion event in Pittsburgh, a unique platform to display innovative and avant.
          </p>
          <p className="body">
            Our designers are unafraid of freely expressing themselves and taking risks. They explore our society’s most pressing current events and cultural values to bring them to life. Some of the unconventional materials that they use range from technological mood-sensing chips or glow-in-the-dark resin to robust sheet metal.
          </p>
        </div>
      </section>
      <div className={cn('noise', styles.noise)} />
    </div>
  );
}
