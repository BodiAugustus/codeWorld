import Button from '../ui/button';
import styles from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Classes in {humanReadableDate}</h1>
      <Button link="/courses">Show all classes</Button>
    </section>
  );
}

export default ResultsTitle;
