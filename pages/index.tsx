import Layout from '@components/layout';
import styles from '@styles/index.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.location}>Buenos Aires City, Argentina</div>
          <div className={styles.logo}>
            Pressliner <div className={styles.slogan}>The modern newspaper</div>
          </div>

          <div className={styles.weather}>Weather: 19 C. Mostly Sunny</div>
        </header>
        <main className={styles.main}>Headline</main>
      </div>
    </Layout>
  );
};

export default Home;
