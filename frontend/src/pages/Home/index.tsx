
import { Header } from '../../Components/Header';
import { Sobre } from '../../Components/Sobre'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Main, VideoOverlay, VideoBackground, Content, Container, Conteudo, CompreAgora, ContainerTitle } from './style';
import { Planos, CardPai, Card } from './style';
import video from '/VideoPvP.mp4';
import { Footer } from '../../Components/Footer';
import { FaleConosco } from '../../Components/FaleConosco';
import { api } from '../../api/http';
import { Button } from '@/Components/ui/button';
import { useToast } from '@/hooks/use-toast';

function Home() {
  const [text] = useTypewriter({
    words: ['Olá player', 'Somos a Moonshop screenshare', 'Conheça nossos planos'],
    loop: 5,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const { toast } = useToast()

  function BuyProduct(NameProduct:string) {
    api.post(`/payments/create/${NameProduct}`)
    .then((e) => {
      // window.href = `${}`
    })
    // .catch((e) => {
    //   alert(e)
    // })
  }

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
            <span><Cursor cursorStyle='|' /></span>
          </p>
        </Content>
      </Main>
      <Sobre />
      <Planos>
        <h2 id="TitlePlanos">Que tal começar <br></br><span style={{ color: "#08BA92" }}>estudar</span> conosco hoje mesmo?</h2>
        <CardPai>
          <Card>
            <Container>
              <ContainerTitle>
                <p className='precoProduto'>
                  R$39,99 / life
                </p>
                <h1>💫 Stars</h1>
              </ContainerTitle>
              <hr />
              <p className='sobreOcurso'>Nosso pacote mais básico oferece ensinamentos essenciais para sua screenshare ser mais eficaz, um curso introdutório para
                aqueles que desejam entender um pouco do assunto porem não com tanta profundidade
                (<span style={{ backgroundColor: '#F9C23C', color: '#fff' }}>Stars</span>)
              </p>
              <Conteudo style={{ marginTop: '2.9rem' }}>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Pacote de SS (<span style={{ color: '#F9C23C' }}>Stars</span>)</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Conteúdos básicos</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Aulas essenciais de detecção (5)</p>
              </Conteudo>
            </Container>
            <hr style={{ marginTop: '1.75rem' }} />
            <Container>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <CompreAgora onClick={() => BuyProduct('product_stars')}>
                  <p>Compre agora {'>'}</p>
                </CompreAgora>
                <a href='#' className='faleConosco'>Fale conosco</a>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <ContainerTitle>
                <p className='precoProduto'>
                  R$99,99 / life
                </p>
                <h1>🌒 Eclipse</h1>
              </ContainerTitle>
              <hr />
              <p className='sobreOcurso'>Nosso pacote mediano, proporciona ao cliente métodos e maneiras importantes e eficazes de detecção para sua screeenshare Pacote de SS
                (<span style={{ backgroundColor: '#da43d4d0', color: '#fff', fontWeight: '200' }}>Eclipse</span>) Conteúdos medianos para quem buscar um conhecimento a mas
              </p>
              <Conteudo>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Pacote de SS (<span style={{ color: '#da43d4d0' }}>Eclipse</span>)</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Conteúdos medianos</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Aulas intermediárias de detecção (9)</p>
              </Conteudo>
            </Container>
            <hr style={{ marginTop: '2.5rem' }} />
            <Container>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <CompreAgora onClick={() => BuyProduct('product_eclipse')}>
                  <p>Compre agora {">"}</p>
                </CompreAgora>
                <a href='#' className='faleConosco'>Fale conosco</a>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <ContainerTitle>
                <p className='precoProduto'>
                  R$149,99 / life
                </p>
                <h1>🌀 Deluxe</h1>
              </ContainerTitle>
              <hr />
              <p className='sobreOcurso'>
                o mais avançado, proporciona ao cliente detectar até as trapaças mais complexas já vistas até o momento, trabalhamos com metodos atualizados e sempre revisamos para proporcionar ao cliente a segurança em sua SS
                (<span style={{ backgroundColor: '#1345B7', color: '#fff' }}>Stars</span>)
              </p>
              <Conteudo>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Pacote de SS (<span style={{ color: '#1345B7' }}>Deluxe</span>)</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Conteúdos avançados</p>
                <p><IoCheckmarkDoneSharp color="#a543e6d0" size={20} /> Aulas avançadas de detecção (14)</p>
              </Conteudo>
            </Container>
            <hr style={{ marginTop: '2.5rem' }} />
            <Container>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <CompreAgora onClick={() => BuyProduct('product_deluxe')}>
                  <p>Compre agora {">"}</p>
                </CompreAgora>
                <a href='#' className='faleConosco'>Fale conosco</a>
              </div>
            </Container>
          </Card>



<Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>

        </CardPai>
      </Planos>
      <FaleConosco />
      <Footer />
    </>
  );
}

export { Home };
