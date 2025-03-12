import { useState } from "react";
import { Link } from "../../LinkDiscord";
import { External, HeaderStyle, HR } from "./style";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import MoonIcon from '/public/Moonshop icon.png'
import HambClose from '/public/menu fechado - bootstrap.svg';
import HambNormal from '/public/menu aberto - bootstrap.svg';

export function HeaderMobille() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <External>
        <HeaderStyle>
          <div className='logoIcon' style={{ position: 'fixed' }}>
            <img src={MoonIcon} />
          </div>
          {menu ? (
            <IoMdClose color="#ffffff" className="menu_icon" onClick={() => setMenu(!menu)} />
          ) : (
            <BiMenuAltRight color="#08BA92" className="menu_icon" onClick={() => setMenu(!menu)} />
          )}

          {menu ? (
            <nav className="nav-bar">
              <div className="nav-list">
                <ul>
                  <li>
                    <a href="#" onClick={() => setMenu(!menu)}>Início</a>
                  </li>
                  <li>
                    <a href="#TitleSobre" onClick={() => setMenu(!menu)}>Sobre</a>
                  </li>
                  <li>
                    <a href="#TitlePlanos" onClick={() => setMenu(!menu)}>Nossos planos</a>
                  </li>
                  <li>
                    <a href="#TitleFaleConosco" onClick={() => setMenu(!menu)}>Fale conosco</a>
                  </li>
                </ul>
              </div>
            </nav>
          ) : null}
        </HeaderStyle>
      </External >
      <HR />
    </>
  )
}