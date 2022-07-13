
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>France art</title>
        <meta name="description" content="A page to share your work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home;
