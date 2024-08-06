import { External, HeaderStyle, HR } from './style'
import { Link } from '../LinkDiscord/index'
import MoonIcon from '/Moonshop icon.png'

export function Header () {
  return (
   <>
    <External>
     <HeaderStyle>
      <div className='logoIcon'>
       <img src={MoonIcon}/>
      </div>
       <ul>
        <li>
         <a href="#">Início</a>
        </li>
        <li>
         <a href="#TitleSobre">Sobre</a>
        </li>
        <li>
         <a href="#TitlePlanos">Nossos planos</a>
        </li>
        <li>
         <a href="#TitleFaleConosco">Fale conosco</a>
        </li>
       </ul>
       <Link Text={"Comunidade"}/>
      </HeaderStyle>
     </External>
    <HR />
   </>
  )
}