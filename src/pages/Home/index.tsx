import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Header } from '../../Components/Header';
import { Main, VideoOverlay, VideoBackground, Content } from './style';
import { Planos } from './style';
import video from '/VideoPvP.mp4';
import MoonIcon from '/Moonshop icon.png'

function Home () {
  const [text]  = useTypewriter({
    words: ['Olá player', 'Somos a Moonshop', 'Conheça nossos planos'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <Header />
      <Main>
        <VideoOverlay>
          <VideoBackground autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </VideoBackground>
        </VideoOverlay>
        <Content>
          
         <h1>
          MoonShop, LLC
         </h1>
          <p>
          <span>{text}</span>
          <span><Cursor cursorStyle='|'/></span>
          </p>
          
        </Content>
      </Main>
      <Planos>
       <h2>Quais planos nós oferecemos</h2>
       <section>
        Stars
       </section>
       <section>
        Eclipse
       </section>
       <section>
        Deluxe
       </section>
      </Planos>
    </>
  );
}

export { Home };
