import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pressliner</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div>
          Welcome,{" "}
          <Link href="/profile">
            <a>User</a>
          </Link>
        </div>
        <div>
          <Link href="/login">
            <a>Login</a>
          </Link>
          ,{" "}
          <Link href="/register">
            <a>Sign up</a>
          </Link>
          ,{" "}
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </div>
        <div>
          <Link href="/explore">
            <a>Explore</a>
          </Link>
          ,{" "}
          <Link href="/browse">
            <a>Browse</a>
          </Link>
          ,{" "}
          <Link href="/discover">
            <a>Discover</a>
          </Link>
          ,{" "}
          <Link href="/create">
            <a>Create</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
