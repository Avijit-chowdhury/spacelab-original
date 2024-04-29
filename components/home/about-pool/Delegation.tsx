import toast from 'react-hot-toast'
import { Slide } from './Slide'
import { copyToClipboard } from '../../../utils/copyToClipboard'
import { DelegateButton } from '@features/wallet'

const POOL_ID = '4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f'

export const Delegation: React.FC = () => {
  const onCopyClick = () => {
    toast.success('Copied to clipboard!')
    copyToClipboard(POOL_ID)
  }

  return (
    <Slide title="Delegation">
      <div>
        <div className="flex items-center">
          <span className="font-semibold tracking-wide">OUR POLICY ID:</span>{' '}
          <input
            onFocus={(event) => event.target.select()}
            className="text-slate-200  appearance-none flex-1 p-1 ml-3 bg-slate-800 border border-slate-700 rounded-md focus:border-slate-600 focus:outline-none"
            readOnly
            defaultValue={POOL_ID}
          />
        </div>
       
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start">
        <DelegateButton className="mb-3 w-full sm:mb-0 sm:mr-3 sm:w-auto " />

        <button
          className="btn-secondary w-full sm:w-auto"
          onClick={onCopyClick}
        >
          Copy Policy ID
        </button>
      </div>
    </Slide>
  )
}
