import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Pressliner' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
        <Link href="/explore">
          <a>Explore</a>
        </Link>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
        <Link href="/discover">
          <a>Discover</a>
        </Link>
        <Link href="/create">
          <a>Create</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
