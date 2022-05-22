import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MainRef.module.scss'
// import styles from '../styles/Main.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <a href="/">
            <img src="/logo.png" alt="Unsplash" />
          </a>
        </div>
        <div className={styles.searchBox}>
          <input type="text" className={styles.searchBar} />
        </div>
        <nav className={styles.mainNavBox}>
          <ul className={styles.mainNav}>
            <li>
              <a href="#none">
                <span>Explore</span>
              </a>
              <a href="#none">
                <span>Advertise</span>
              </a>
              <a href="#none">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="loginBox">
          <div>
            <a href="#none">
              <span>Log in</span>
            </a>
          </div>
          <div>
            <a href="#none">
              <span>Sign up</span>
            </a>
          </div>
        </div>
      </header>
      <section className={styles.mainBanner}>
        <div className={styles.contentsBox}>
          <h1>Unsplash</h1>
          <p>The internet’s source of freely-usable images.<br/>
          Powered by creators everywhere.</p>
          <input type="text" className={styles.mainSearchBar} />
        </div>
      </section>
    </div>
  )
}

export default Home
