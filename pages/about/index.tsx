import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import Aboutpage from '@components/projects/Aboutpage'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SpaceLabz/Analytics</title>
      </Head>

      <Header />

      <main>
        <Aboutpage />
      </main>
      <Footer />
    </div>
  )
}

export default About
