import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@components/shared/Footer'
import { Header } from '@components/shared/Header'
import Ownerss  from "@components/projects/Ownerss"
import fsPromises from 'fs/promises'
import path from 'path'
import JsonData from '@components/shared/JsonData'
import { useAOS } from 'hooks/useAOS'



interface MyComponentProps {
  data: any
}

const Owners: NextPage<MyComponentProps> = ({ data }) => {
  useAOS()
  return (
    <div>
      <Head>
        <title>SpaceLabz/Owners</title>
      </Head>

      <Header />

      <main>
        <Ownerss />
    
      </main>
      <JsonData data={data} />
      
      <Footer />
    </div>
  )
}

export default Owners 

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/JSON_DATA', '/v1_old_policy_NFTs.json')
  const jData: Buffer = await fsPromises.readFile(filePath)
  const jDataString: string = jData.toString('utf-8')
  const objectData = await JSON.parse(jDataString)

  return {
    props: { data: objectData },
  }
}