import { Grid } from "swiper"

export default function JsonData(props: { data: any }) {
  const data = props?.data
  return (
    <div className="w-full grid grid-cols-10 pb-20">
      {data.map(
        (data: any, index: any) =>
          index <= 100 && (
            <div
              key={data.asset_name}
              style={{
                margin:3,
                padding: 3,
                border: '1px solid #ccc',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h1 className="break-words">asset_name : {data.asset_name}</h1>
              <p className="break-words">fingerprint : {data.fingerprint}</p>
            </div>
          )
      )}
    </div>
  )
}
