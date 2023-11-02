import { useState } from 'react'
import { DtPicker }  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'

export default function DatePicker () {
	const dateObj = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
	}

  const [date, setDate] = useState(dateObj)

  return (
		<DtPicker
			initValue={date}
			onChange={setDate}
			inputClass='px-2 text-left border-none appearance-none bg-grey-light outline-none rounde-md w-full font-semibold text-grey-solid text-xs px-[20px]'
			clearBtnClass='bg-grey-solid text-white'
			calenderModalClass='bg-transparent'
			headerClass='bg-white'
		/>		
  )
}
