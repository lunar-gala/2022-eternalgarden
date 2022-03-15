import styles from './index.module.scss';

export default function PeopleCard({ slug, name }) {
  return (
    <div className={styles.card} key={slug}>
      <img src={`assets/people/${slug}`} alt={name + ' photo'} />
      <p>{name}</p>
    </div>
  );
}
