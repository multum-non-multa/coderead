/** @jsx jsx */
import { Button, Flex, jsx, Link } from "theme-ui";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <code className={styles.code}>
          <h1 className={styles.title}>
            &lt;code<span style={{ color: "firebrick" }}>re<span style={{ color: "darkgray" }}>a</span>d</span>/&gt;
          </h1>
        </code>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
              <Link href="/blog">
                <a>
                  <Button sx={{ cursor: "pointer" }}>Posts</Button>
                </a>
              </Link>
            </Flex>
          </div>
          <div className={styles.card}>
            <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
              <Link href="/about">
                <a>
                  <Button sx={{ cursor: "pointer" }}>About</Button>
                </a>
              </Link>
            </Flex>
          </div>
        </div>
      </main>
    </div >
  );
}
