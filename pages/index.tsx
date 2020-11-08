import Layout from '@components/layout';
import styles from '@styles/index.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>Pressliner</div>
        </header>
        <main className={styles.main}>Welcome, User.</main>
      </div>
    </Layout>
  );
};

export default Home;
