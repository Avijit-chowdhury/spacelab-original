import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import Projectpage from '@components/projects/Projectpage'

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SpaceLabz/Projects</title>
      </Head>

      <Header />

      <main>
        <Projectpage />
      </main>
      <Footer />
    </div>
  )
}

export default Projects
