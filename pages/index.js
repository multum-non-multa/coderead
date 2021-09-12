/** @jsx jsx */
import { Button, Flex, jsx } from "theme-ui";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>
          <h1 className={styles.title}>
            &lt;code<span style={{ color: "firebrick" }}>re<span style={{ color: "darkgray" }}>a</span>d</span>/&gt;
          </h1>
        </code>

        {/*  */}

        <div className={styles.grid}>
          <Link href="/blog" >
            <a className={styles.card}>
              <h2>&larr; Posts</h2>
              <p>Posts for on coding in Python, using Replit, and various and sundry other things ...</p>
            </a>
          </Link>

          <Link href="/resources" >
            <a className={styles.card}>
              <h2>Resources &uarr;</h2>
              <p>Resources on programming in general and Python in particular</p>
            </a>
          </Link>

          <Link href="/about" >
            <a className={styles.card}>
              <h2>&darr; About</h2>
              <p>If interested, this will tell you more ... </p>
            </a>
          </Link>

          <a href="https://github.com/multum-non-multa" className={styles.card}>
            <h2>Source &rarr;</h2>
            <p>Resources on programming in general and Python in particular</p>
          </a>
        </div>

        {/*  */}
      </main>
    </div >
  );
}
