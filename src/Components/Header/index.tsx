import { External, HeaderStyle, HR } from './style'
import luaIcon from '/lua normal.png'
import discordIcon from '/discordIcon.svg'

export function Header () {
  return (
   <>
    <External>
     <HeaderStyle>
      <div>
       <img src={luaIcon}/>
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
       <button>
        <img src={discordIcon} alt="" />
        Comunidade
       </button>
     </HeaderStyle>
    </External>
    <HR />
   </>
  )
}