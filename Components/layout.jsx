import Head from 'next/head'

import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

export const siteTitle = 'Kyle Smith Portfolio'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="First Post"
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header className={`${utilStyles.flex} ${utilStyles.aCenter} ${styles.header}`}>
                <h1 className={`${utilStyles.headingMd}`}>Kyle S.</h1>
			</header>
			<main className={styles.container}>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
};
