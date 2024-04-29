import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
import { Hero } from '../components/home/Hero/Hero'
import { AboutPool } from '../components/home/about-pool/AboutPool'
import { AboutCardano } from '../components/home/AboutCardano'
import { Marketplace } from '@components/home/Marketplace'
import JsonData from '@components/shared/JsonData'
import { BlockchainInsights } from '../components/home/BlockchainInsights'

import { useAOS } from '../hooks/useAOS'

interface MyComponentProps {
  data: any
}
const Home: NextPage<MyComponentProps> = ({ data }) => {
  useAOS()

  return (
    <div>
      <Head>
        <title>SpaceLabz</title>
      </Head>

      <Header />

      <main>
        <Hero />

        <AboutPool />

        <Marketplace />

        <AboutCardano />
      </main>
      
      <Footer />
    </div>
  )
}

export default Home

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/JSON_DATA', '/V1_o_p_a_l_a.json')
  const jData: Buffer = await fsPromises.readFile(filePath)
  const jDataString: string = jData.toString('utf-8')
  const objectData = await JSON.parse(jDataString)

  return {
    props: { data: objectData },
  }
}
