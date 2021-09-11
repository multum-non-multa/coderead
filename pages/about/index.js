/** @jsx jsx */

import { Button, Flex, jsx, Link } from "theme-ui";
import styles from "../../styles/Home.module.css";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
                <h1>Welcome to Here</h1>
            </Flex>
        </div>
    );
}
