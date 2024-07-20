import { Container, FaleConoscoStyle } from './style'
import { Link } from '../LinkDiscord'

function FaleConosco () {
  return (
   <>
    <FaleConoscoStyle>
      <h1>Entre em contato conosco para mais informações</h1>
     <Container>
      <Link Text={"Suporte"}/>
     </Container>
    </FaleConoscoStyle>
   </>
  )
}

export { FaleConosco }