import { useWallet } from '../useWallet'

export const DelegateButton = (props: any) => {
  const { delegate } = useWallet()

  const onClick = () => {
    delegate()
  }

  return (
    <div {...props}>
      <a href='/#about'>
      <button className="btn-2 w-full">
        More About Us
      </button>
      </a>
    </div>
  )
}
