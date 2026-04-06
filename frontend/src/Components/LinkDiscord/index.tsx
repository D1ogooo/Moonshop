import { LinkStyle } from './style'
import discordIcon from '/discordIcon.svg'

export function Link ({ Text }: { Text: string }) {
 return(
  <LinkStyle target='_blank' href='https://discord.gg/3YpDJmrdK3'>
   <img src={discordIcon} alt="" />
   <p>{Text}</p>
  </LinkStyle>
 )
} 