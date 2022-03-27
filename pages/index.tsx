import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortly - Cutting edge url shortening platfrom</title>
        <meta name="description" content="a url shortening platform" />
        <meta name="keywords" content="url short, short my url, Bashid, Shortly" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar />
      <main className={styles.main}>

      </main>
      <Footer />
    </div>
  )
}

export default Home
