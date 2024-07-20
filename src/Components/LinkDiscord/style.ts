import styled from 'styled-components'


export const LinkStyle = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .875rem;
  width: 9.0625rem;
  cursor: pointer;
  height: 3.125rem;
  border-radius: 3.125rem;
  margin-top: -.625rem;
  background: #08BA92;
  font-family: "Nunito Sans", sans-serif;
  font-size: .9rem;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  img {
   width: 1.875rem;
   height: 1.875rem;
  }
 
 &:hover {
  background: #15d2a9;
  transition: 0.5s all;
  p {
   transition: 500ms all;
   display: none;
  }

  img {
   margin: 0 auto;
  }
 }
`