/** @jsx jsx */
import { jsx } from 'theme-ui'
import theme from '../theme'
import Link from 'next/link'


const Nav = () => (
    <header sx={{ height: '60px', width: '100vw', borderBottom: '1px solid', borderColor: 'primary' }}>
        <nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'spread', variant: 'containers.page', height: '100%', }}>
            <code>
                <p sx={{ fontSize: 4, px: "10%" }}>
                    &lt;code<span style={{ color: "firebrick" }}>re<span style={{ color: "darkgray" }}>a</span>d</span>/&gt;
                </p>
            </code>
            <Link href="/">
                <a sx={{ fontSize: 4, cursor: 'pointer', px: "10%" }}>Home</a>
            </Link>
            <Link href="/blog">
                <a sx={{ fontSize: 4, cursor: 'pointer', px: "10%" }}>Posts</a>
            </Link>
            <Link href="/resources">
                <a sx={{ fontSize: 4, cursor: 'pointer', px: "10%" }}>Resources</a>
            </Link>
            <Link href="/about">
                <a sx={{ fontSize: 4, cursor: 'pointer', px: "10%" }}>About</a>
            </Link>

        </nav>
    </header>
)

export default Nav