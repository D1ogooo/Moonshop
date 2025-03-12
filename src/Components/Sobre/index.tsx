import { SobreStyle, Content, HR, Left, Right, Conteudo, TitleSobre, Paragraph } from './style'
import MoonIcon from '/Moonshop icon.png'

function Sobre() {
  return (
    <>
      <SobreStyle id="TitleSobre">
        <Content>
          <TitleSobre>Quem <span>somos</span></TitleSobre>
          <Conteudo>
            <Left>
              <img src={MoonIcon} alt="MoonShop Icon" />
            </Left>
            <Right>
              <h1>MoonShop</h1>
              <HR />
              <Paragraph>
                Bem-vindo à MoonShop, sua fonte confiável para aprender a detectar trapaças no Minecraft! Se você é um jogador apaixonado em busca de conhecimento ou um administrador de servidor determinado a manter a integridade do jogo, você veio ao lugar certo. Em nosso espaço dedicado, oferecemos cursos detalhados e práticos sobre como identificar mods não autorizados, comportamentos suspeitos e outras formas de trapaça que podem afetar sua experiência de jogo. Nossa equipe de especialistas está aqui para guiá-lo através das nuances da detecção de trapaças, equipando-o com as ferramentas e o conhecimento necessários para manter um ambiente justo e divertido para todos. Nossos cursos abrangem desde técnicas básicas até métodos avançados de análise de logs e software de detecção. Com a orientação certa, você será capaz de reconhecer rapidamente sinais de atividades fraudulentas e tomar medidas proativas para proteger sua comunidade de jogadores. Na Moonshop, acreditamos na importância de educar e capacitar jogadores e administradores para enfrentar desafios relacionados à integridade do jogo. Esteja você começando sua jornada ou buscando aprimorar suas habilidades existentes, estamos aqui para apoiá-lo em cada passo do caminho. Junte-se a nós na missão de manter o Minecraft livre de trapaças e garantir uma experiência de jogo positiva para todos. Entre em contato hoje mesmo para saber mais sobre nossos cursos especializados em detecção de trapaças e como podemos ajudá-lo a se tornar um especialista neste importante aspecto do jogo.
              </Paragraph>
            </Right>
          </Conteudo>
        </Content>
      </SobreStyle>
    </>
  )
}

export { Sobre }
