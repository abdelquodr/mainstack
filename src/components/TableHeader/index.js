import { Button } from '@/components'
import PropTypes from'prop-types'

export default function TableHeader({transactions, desc, openDrawer}) {
  return (
    <div role='list' className='flex justify-between align-middle items-center border-b border-gray-200 pb-4 my-10'>
      <div className=''>
        <h5 className='text-grey-solid text-2xl font-bold'>{transactions}</h5>
        <p className='text-grey-soft text-xs'>{desc}</p>
      </div>

      <div className='flex space-x-4'>
        <Button onClick={openDrawer} className='flex flex-row-reverse px-2' icon={'expand_more'} label='Filter' type='default'/>
        <Button className='flex flex-row-reverse px-2' icon={'download'} label='Export list' type='default'/>
      </div>
    </div>
  )
}


// TableHeader.propTypes = {
//   transactions: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   openDrawer: PropTypes.func.isOptional
// };