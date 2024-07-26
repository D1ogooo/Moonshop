import { useState, useEffect } from 'react'
import { HeaderDesktop } from '../HeaderDesktop'
import { HeaderMobille } from '../HeaderMobille'

export function Header () {
  const [state, setState] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
     setState(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
   },[])

  return ( <> { state > 1000 ? <HeaderDesktop /> : <HeaderMobille /> } </>)
}