import styled from "styled-components";

export const External = styled.div`
height: 3.5rem;
`
export const HeaderStyle = styled.header`
 width: 90%;
 margin: 0 auto;
 margin-top: 1rem;
 
 display: flex;
 align-items: center;
 justify-content: space-around;
 ul {
  display: flex;
  gap: 1rem;
  
  li {
   list-style: none;
    a {
     font-family: "Nunito Sans", sans-serif;
     text-decoration: none;
     font-size: 1.125rem;
     color: #C4C4C5;
     font-weight: 260;
    }
    a:hover {
     color: #fff;
     transition: 500ms;
    }
  }
 }

 div:nth-child(1) {
  border-radius: 2.5rem;
  height: 3.75rem;
  width: 3.75rem;
  background-color: #000;
  text-align: center;
  padding: .3125rem;
  img {
   height: 3.125rem;
   width: 3.125rem;
  }
 }
`

export const Link = styled.a`
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

export const HR = styled.hr`
 background: #545454;
 margin-top: 1rem;
 border: none;
 width: 100%;
 height: .0625rem;
`