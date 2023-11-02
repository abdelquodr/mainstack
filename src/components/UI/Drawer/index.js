import Image from 'next/image'
import { Input, Button, DatePicker } from '@/components'
import { createPortal } from 'react-dom';
import { useAppState } from '@/State/AppState';


const labelsData= {
  type:   ['Store Transaction','Get Tipped', 'Withdrawal', 'Chargebacks', 'Cashbacks', 'Refer & Earn'],
  status: ['Successful', 'Pending','Failed']
}

export default function Drawer({ closeDrawer, isActive }) {
  return (
    createPortal(
      <Draw closeDrawer={ closeDrawer } isActive={isActive} />,
      document.body
    )
  )
}


function Draw({ closeDrawer, isActive }) {
  const { state: { filterFormDataType, filterFormDataStatus  } } = useAppState();
  const isFormData = filterFormDataType.length > 0 && filterFormDataStatus.length > 0 

  console.log(isFormData, '================================' )
  return (
    <div className={`ease-out duration-500 transition-all w-full z-20 bg h-full fixed ${!isActive && 'hidden' }`}>
      <div className='float-right relative ease-out transition-all w-[25rem] h-[96%] rounded-xl shadow-md bg-white z-50 px-5 py-5 m-4'>
        <div className='flex justify-between'>
          <h5 className='font-bold text-1xl'>Filter</h5>
          <span  onClick={closeDrawer} className='transparent hover:bg-grey-light w-8 h-8 p-2 text-center rounded-full cursor-pointer'>
            <Image src={'../assets/close.svg'} alt='Close' width={20} height={20} />
          </span>
        </div>

        <div className='flex space-x-1 py-8'>
          <Button label='Today' type='outlined' className='px-3 py-2 whitespace-nowrap text-xs font-normal' />
          <Button label='Last 7 days' type='outlined' className='px-3 py-2 whitespace-nowrap text-xs font-normal' />
          <Button label='This month' type='outlined' className='px-3 py-2 whitespace-nowrap text-xs font-normal' />
          <Button label='Last 3 months' type='outlined' className='px-3 py-2 whitespace-nowrap text-xs font-normal' />
        </div>

        <form>
          <div className='pb-3'>
            <h5 className='text-sm text-left text-grey-solid font-degular font-bold py-1'>Date Range</h5>
            <div className='flex space-x-2'>
              <DatePicker />
              <DatePicker />
            </div>
          </div>
          <Input header='Transaction Type' labels={labelsData?.type} type='type' />
          <Input header='Transaction Status' labels={labelsData?.status} type='status' />
          <div className='flex justify-between px-5 absolute inset-x-0 bottom-5'>
            <Button label='Clear' type='outlined' className={`px-16 py-3 ${isFormData ? 'cursor-pointer' : 'cursor-not-allowed  opacity-50' } `} isDisabled={ !isFormData && true} />
            <Button label='Apply' type='solid' className={`px-16 py-3 ${isFormData ? 'cursor-pointer' : 'cursor-not-allowed opacity-50' } `} isDisabled={ !isFormData && true}  />
          </div>
        </form>      
      </div> 
    </div>
  )
};