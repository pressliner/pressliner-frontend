import { InferGetStaticPropsType } from 'next';

import Layout from '@components/layout';
import styles from '@styles/index.module.scss';

const Home = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <div className={styles.categories}>
          {categories.map((category: Category) => {
            return (
              <span key={category.id} className={styles.category}>
                {category.name}
              </span>
            );
          })}
        </div>
        <main className={styles.main}>Headline</main>
      </div>
    </Layout>
  );
};

type Category = {
  id: string;
  name: string;
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/categories');
  const categories: Category[] = await res.json();

  return {
    props: {
      categories,
    },
  };
};

export default Home;
