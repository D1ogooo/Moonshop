import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import coinIcon from '/coinIcon.png'
import { Header } from '../../Components/Header';
import { Main, VideoOverlay, VideoBackground, Content, Container, Conteudo, CompreAgora, Buy } from './style';
import { Planos, CardPai, Card } from './style';
import video from '/VideoPvP.mp4';
import MoonIcon from '/Moonshop icon.png'

function Home () {
  const [text]  = useTypewriter({
    words: ['Olá player', 'Somos a Moonshop screenshare', 'Conheça nossos planos'],
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
       <h2>Que tal começar <br></br><span style={{ color: "#08BA92"}}>estudar</span> conosco hoje mesmo?</h2>
       <CardPai>
        <Card>
          <Container>
          <h1>💫 Stars</h1>
          <hr />
          <p className='sobreOcurso'>Nosso pacote mais básico oferece ensinamentos essenciais para sua screenshare ser mais eficaz, um curso introdutório para
            aqueles que desejam entender um pouco do assunto porem não com tanta profundidade
            (<span style={{ backgroundColor: '#F9C23C', color: '#fff'}}>@[ST] Stars</span>)
          </p>
         <Conteudo style={{ marginTop: '2.9rem'}}>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Pacote de SS (@[ST] Stars)</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Conteúdos básicos</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Aulas essenciais de detecção (5)</p>
         </Conteudo>
         </Container>
         <hr style={{ marginTop: '1.75rem'}}/>
         <Container>
         <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <p className='precoProduto'>
            R$39,99 / life
          </p>
         <CompreAgora>
          <p>Compre agora</p>
         </CompreAgora>
         </div>
         </Container>
        </Card>
        <Card>
         <Container>
          <h1>🌒Eclipse</h1>
          <hr />
          <p className='sobreOcurso'>Nosso pacote mediano, proporciona ao cliente métodos e maneiras importantes e eficazes de detecção para sua screeenshare Pacote de SS 
           (<span style={{ backgroundColor: '#da43d4d0', color: '#fff', fontWeight: '200' }}>@[EC] Eclipse</span>) Conteúdos medianos.
           Aulas intermediárias de detecção (9).
          </p>
         <Conteudo>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Pacote de SS (@[EC] Eclipse)</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Conteúdos medianos</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Aulas intermediárias de detecção (9)</p>
         </Conteudo>
         </Container>
         <hr style={{ marginTop: '2.5rem'}}/>
         <Container>
         <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <p className='precoProduto'>
           R$99,99 / life
          </p>
         <CompreAgora>
          <p>Compre agora</p>
         </CompreAgora>
         </div>
         </Container>
        </Card>
        <Card>
         <Container>
          <h1>🌀 Deluxe</h1>
          <hr />
          <p className='sobreOcurso'>Nosso pacote mediano, proporciona ao cliente métodos e maneiras importantes e eficazes de detecção para sua screeenshare Pacote de SS 
           (<span style={{ backgroundColor: '#1345B7', color: '#fff', fontWeight: '200' }}>@[DE] Deluxe</span>) Conteúdos medianos.
           Aulas intermediárias de detecção (9).
          </p>
         <Conteudo>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Pacote de SS (@[DE] Deluxe)</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Conteúdos avançados</p>
          <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20}/> Aulas avançadas de detecção (9)</p>
         </Conteudo>
         </Container>
         <hr style={{ marginTop: '2.5rem'}}/>
         <Container>
         <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <p className='precoProduto'>
            R$149,99 / life
          </p>
         <CompreAgora>
          <p>Compre agora</p>
         </CompreAgora>
         </div>
         </Container>
        </Card>
       </CardPai>
      </Planos>
    </>
  );
}

export { Home };
