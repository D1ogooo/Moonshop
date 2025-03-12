import { useState, useEffect } from 'react'
import { HeaderDesktop } from './Desktop/index';
import { HeaderMobille } from './Mobille/index'

export function Header() {
  const [state, setState] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setState(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
  }, [])

  return (<> {state > 1000 ? <HeaderDesktop /> : <HeaderMobille />} </>)
}