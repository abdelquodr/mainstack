import Image from 'next/image'

export default function NavIcon({icon, size = 25}) {
    return (
      <span className='m-auto'>
        <Image className='inline pr-1 align-middle pb-1' src={`../assets/${icon}.svg`} width={ size } height={size} alt={`${icon}`} />
      </span>
    )
  }
  