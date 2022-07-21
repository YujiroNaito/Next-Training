import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const FriendList: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Friends</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Friends
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/friends/Taro?id=1">Taro Yamada</Link>
          </div>
          <div className={styles.card}>
            <Link href="/friends/Hanako?id=2">Hanako Tanaka</Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default FriendList
