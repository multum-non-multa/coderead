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
          {/* <Link href="/" > */}
            <a href="https://multum-non-multa.github.io/code/" className={styles.card}>
              <h2>&larr; Posts</h2>
              <p style={{color: "firebrick", fontWeight: "bold"}}>
                For now this is the only link that works.  It takes you to the current site.  
                In a few days, all of that content should be ported here.

              </p>
            </a>
          {/* </Link> */}

          <Link href="/" >
            <a className={styles.card}>
              <h2>Resources &uarr;</h2>
              <p>Resources on programming in general and Python in particular</p>
            </a>
          </Link>

          <Link href="/" >
            <a className={styles.card}>
              <h2>&darr; About</h2>
              <p>If interested, this will tell you more ... </p>
            </a>
          </Link>

          <a href="" className={styles.card}>
            <h2>Source &rarr;</h2>
            <p>Resources on programming in general and Python in particular</p>
          </a>
        </div>

        {/*  */}
      </main>
    </div >
  );
}
