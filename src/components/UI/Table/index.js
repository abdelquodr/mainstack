import { TableHeader, TableData } from '@/components'

export default function Table({openDrawer}) {
  return (
    <div className='pt-8'>
      <TableHeader openDrawer={ openDrawer } transactions='24 transactions' desc='Your transactions for the last 7 days' />
      {
        [0, 1, 2, 3, 4, ,5].map((_td, index) => (<TableData key={index} />))
      }    
    </div>
  )
}
