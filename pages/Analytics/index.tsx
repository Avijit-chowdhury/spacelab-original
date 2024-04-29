import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import Analyticspage from '@components/projects/Analyticspage'

const Analytics: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SpaceLabz/Analytics</title>
      </Head>

      <Header />

      <main>
        <Analyticspage />
      </main>
      <Footer />
    </div>
  )
}

export default Analytics
