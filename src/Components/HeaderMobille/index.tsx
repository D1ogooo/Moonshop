import { External, HeaderStyle, HR } from './style'
import { Link } from '../LinkDiscord/index'
import MoonIcon from '/Moonshop icon.png'

export function HeaderMobille() {
  return (
   <>
    <External>
     {/* <HeaderStyle>
      <div>
       <img src={MoonIcon}/>
      </div>
       <ul>
        <li>
         <a href="#" className="nav-link">Início</a>
        </li>
        <li>
         <a href="#TitleSobre" className="nav-link">Sobre</a>
        </li>
        <li>
         <a href="#TitlePlanos" className="nav-link">Nossos planos</a>
        </li>
        <li>
         <a href="#TitleFaleConosco" className="nav-link">Fale conosco</a>
        </li>
       </ul>
       <Link Text={"Comunidade"} style={{ zindex: '2'}}/>
      </HeaderStyle> */}
     </External>
    <HR />
   </>
  )
}