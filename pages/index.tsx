import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

export default () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>Welcome, User.</main>
      </div>
    </Layout>
  );
};
