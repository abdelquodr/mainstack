import Image from 'next/image'

export default function TableData() {
  return (
    <div role='listitem' className='flex justify-between py-3'>
      <div className='flex space-x-3'>
        <div className='w-12 h-12 bg-green-soft rounded-full text-center'>
          <Image className='m-auto items-center pt-2' src={'../assets/call_received.svg'} width={30} height={30} alt='call_received' priority={true}  />
        </div>
        <div className='flex-col text-left align-middle items-center'>
          <h6 className='font-normal text-sm'>Psychology of Money</h6>
          <p className='text-grey-soft text-left text-xs'>Roy cash</p>
        </div>
      </div>

      <div className='flex-col text-right align-middle items-center'>
        <h6 className='font-bold text-sm'>USD 600</h6>
        <p className='text-grey-soft text-xs'>Apr 03, 2022</p>
      </div>
    </div>
  )
}