import { External, HeaderStyle, HR, Link } from './style'
import luaIcon from '/lua normal.png'
import discordIcon from '/discordIcon.svg'
import MoonIcon from '/Moonshop icon.png'

export function Header () {
  return (
   <>
    <External>
     <HeaderStyle>
      <div>
       <img src={MoonIcon}/>
      </div>
       <ul>
        <li>
         <a href="#">Home</a>
        </li>
        <li>
         <a href="#">Sobre</a>
        </li>
        <li>
         <a href="#">Fale conosco</a>
        </li>
       </ul>
       <Link target='_blank' href='https://discord.gg/3YpDJmrdK3'>
        <img src={discordIcon} alt="" />
        Comunidade
       </Link>
     </HeaderStyle>
    </External>
    <HR />
   </>
  )
}