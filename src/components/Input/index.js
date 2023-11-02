import { useState } from 'react'
import { Checkbox } from '@/components'
import { useAppState } from '@/State/AppState';


export default function Input({header, labels, type}) {
  const { dispatch } = useAppState();
  const [ openSelect, setOpenSelect ] = useState(false)
  const [checkedValue, setCheckedValue ] = useState([])

  const handleOnChange = (e) =>  e.preventDefault()
  const handleOnFocus = () => setOpenSelect(true)
  const handleOnBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
     setOpenSelect(false)
    }
  }
  
  const handleCheckboxValue = (ischecked, textLabel) =>  {
    if(!ischecked){
      setCheckedValue((prev) => prev.filter(text => text !== textLabel))
      dispatch({ type: `REMOVE_FILTERFORM_${type?.toUpperCase()}`,  value: textLabel });
      return
    }

    setCheckedValue((prev) => ([...prev, textLabel]))
    dispatch({ type: `ADD_FILTERFORM_${type?.toUpperCase()}`, value: textLabel }); 
  }

  return (
    <div className='flex-auto flex flex-col'>
      <h5 className='text-sm text-left text-grey-solid font-degular font-bold pt-3'>{header}</h5>
      <div className='flex flex-col items-center relative w-full'>
        <div className='w-full'>
          <div className={`my-2 bg-grey-light p-1 flex rounded-md ${ openSelect && 'bg-white border-2 border-grey-solid' }`}>
            <div className='flex flex-auto flex-wrap'></div>
            <input onChange={handleOnChange} onFocus={handleOnFocus} value={checkedValue.join(',')} className={`p-1 px-2 appearance-none bg-grey-light  outline-none w-full font-semibold text-grey-solid text-xs ${ openSelect && 'bg-white border-grey-solid' }`} />
            <div className='text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200'>
              <button className='cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div onBlur={handleOnBlur} className={`absolute bg-white shadow-md top-full z-20 w-full lef-0 rounded max-h-[300px] overflow-y-auto ${ !openSelect && 'hidden' }`}>
          <div role='listbox' className='flex flex-col w-full px-4 py-3'> 
            {labels?.map((label) => (
              <Checkbox key={label} textLabel={label} getValue={handleCheckboxValue} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
