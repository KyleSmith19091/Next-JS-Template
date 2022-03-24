import Head from 'next/head';

import Layout, {siteTitle} from '../Components/layout';

import Hero from '../Components/hero';
import AboutMe from '../Components/aboutMe';
import Work from '../Components/Work';

export default function Home() {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Hero />
      <AboutMe />
      <Work />

    </Layout>
  )
}
