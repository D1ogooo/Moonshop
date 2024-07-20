import { External, HeaderStyle, HR } from './style'
import { Link } from '../LinkDiscord/index'
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
         <a href="#">Início</a>
        </li>
        <li>
         <a href="#">Sobre</a>
        </li>
        <li>
         <a href="#">Nossos planos</a>
        </li>
        <li>
         <a href="#">Fale conosco</a>
        </li>
       </ul>
       <Link Text={"Comunidade"}/>
      </HeaderStyle>
     </External>
    <HR />
   </>
  )
}