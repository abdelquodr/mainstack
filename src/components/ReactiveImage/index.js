import { useState, useCallback } from 'react'
import { NavIcon } from '@/components'

export default function ReactiveImage({icon, desc, size = 25}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="relative group"  >
      <div data-testid="hovered-div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-center py-1 grayscale hover:grayscale-0 my-0">
        <NavIcon icon={icon} size={size} />
      </div>
      {isHovered && (
        <>
          <div className="relative m-0 p-0 left-14 bottom-6 h-0 w-0 border-y-8 border-y-transparent border-r-[6px] border-r-grey-solid"></div>
            <div className="absolute text-xs top-3 left-full whitespace-nowrap bg-grey-solid text-white ml-3 px-2 py-2 rounded-md">
              {desc}
          </div>
        </>
      )}
    </div>  
  )
}
