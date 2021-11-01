import utilStyles from "../styles/utils.module.css"
import Layout, {siteTitle} from '../Components/layout'
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Welcome to this new site with infinite possibilities!!]</p>
        <Link href="/example">Page Example(Click Me)</Link>
      </section>
    </Layout>
  )
}
