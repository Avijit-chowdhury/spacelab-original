import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import Nftdetailss  from "@components/projects/Nftdetailss"
import fsPromises from 'fs/promises'
import path from 'path'
import JsonData from '@components/shared/JsonData'
import { useAOS } from 'hooks/useAOS'



interface MyComponentProps {
  data: any
}

const Nftdetails: NextPage<MyComponentProps> = ({ data }) => {
  useAOS()
  return (
    <div>
      <Head>
        <title>SpaceLabz/Nfts</title>
      </Head>

      <Header />

      <main>
        <Nftdetailss />
    
      </main>
      
      <JsonData data={data} />
      
      <Footer />
    </div>
  )
}

export default Nftdetails 

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/JSON_DATA', '/V2_policy_id_assets_info_NFTs.json')
  const jData: Buffer = await fsPromises.readFile(filePath)
  const jDataString: string = jData.toString('utf-8')
  const objectData = await JSON.parse(jDataString)

  return {
    props: { data: objectData },
  }
}