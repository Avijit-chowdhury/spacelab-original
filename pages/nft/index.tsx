import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import  Nfts  from "@components/projects/Nfts"
import fsPromises from 'fs/promises'
import path from 'path'
import JsonData from '@components/shared/JsonData'
import { useAOS } from 'hooks/useAOS'



interface MyComponentProps {
  data: any
}

const Nft: NextPage<MyComponentProps> = ({ data }) => {
  useAOS()
  return (
    <div>
      <Head>
        <title>SpaceLabz/Nfts</title>
      </Head>

      <Header />

      <main>
        <Nfts />
      </main>
      <JsonData data={data} />
      <Footer />
    </div>
  )
}

export default Nft 

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/JSON_DATA', '/V1_o_p_a_l_a.json')
  const jData: Buffer = await fsPromises.readFile(filePath)
  const jDataString: string = jData.toString('utf-8')
  const objectData = await JSON.parse(jDataString)

  return {
    props: { data: objectData },
  }
}