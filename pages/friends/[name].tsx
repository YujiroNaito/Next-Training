import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

type Friend = {
  id: number,
  firstName: string,
  lastName: string,
  sex: "MEN" | "WOMEN",
  age: number,
  description: string
}

const FriendDetail: NextPage = () => {
  const router = useRouter()
  const url = router.asPath
  const name = router.query.name;
  const id = router.query.id;
  const [friend, setFriend] = useState<Friend>();

  useEffect(() => {
    const fetchFriendData = async () => {
      const response = await fetch(`/api/friends/${id}`)
      const data = await response.json()
      setFriend(data.friend)
    }
    void fetchFriendData()
  }, [id, url])

  return (
    <div className={styles.container}>
      <Head>
        <title>Friends</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name}&apos;s Profile
        </h1>
        <div className={styles.description}>
          welcome to {name}&apos;s Page
        </div>
        <div>
          姓：{friend? friend.lastName : ""}
        </div>
        <div>
          名：{friend? friend.firstName : ""}
        </div>
        <div>
          性別：{friend? friend.sex : ""}
        </div><div>
          年齢：{friend? friend.age : ""}
        </div>
        <div>
          ひとこと：{friend? friend.description : ""}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default FriendDetail
