import Image from 'next/image'
import { Button, LineChart } from '@/components'

export default function Chart() {
  return (
    <div className='flex justify-between space-x-32'>
      <div className='w-3/4'>
        <div className=''>
          <div className='text-left align-middle items-center'>
            <p className='text-grey-soft text-xs'>Availabale Balance</p>
            <div className='flex space-x-8 items-end'>
              <h3 className='font-bold text-2xl text-grey-solid'>USD 120,500.00</h3>
              <Button label='withdraw' type='solid' className='text-md py-4 px-16' />
            </div>
          </div>
        </div>

        {/* ****** CHART ******* */}
        <div>
          <LineChart />
        </div>

      </div>

      <div className='w-1/4 mt-3'>
        {
          [0,1,2,3].map((row, index) => (<div key={index} className='py-4'>
          <div  className='flex justify-between'>
            <p className='text-grey-soft text-xs py-1'>Availabale Balance</p>
            <Image src={'../assets/info.svg'} alt='info' width={12} height={12} />
          </div>
          <h3 className='font-bold text-xl text-grey-solid'>USD 178,500.00</h3>
          </div>
          ))
        }
        
      </div>
    </div>
  )
}
