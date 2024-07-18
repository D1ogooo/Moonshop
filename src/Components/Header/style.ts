import styled from "styled-components";

export const External = styled.div`
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
  border-radius: 40px;
  height: 60px;
  width: 60px;
  background-color: #000;
  text-align: center;
  padding: 5px;
  img {
   height: 50px;
   width: 50px;
  }
 }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 14px;
  width: 145px;
  cursor: pointer;
  height: 50px;
  border: solid 1px #C4C4C5;
  border-radius: 50px;
  margin-top: -.625rem;
  background: #01234F;
  font-family: "Nunito Sans", sans-serif;
  font-size: .9rem;
  color: #C4C4C5;
  font-weight: 400;
  text-decoration: none;

  img {
   width: 30px;
   height: 30px;
  }
 
 &:hover {
  background: #015681;
  transition: 0.5s all;
 }
`

export const HR = styled.hr`
 background: #545454;
 margin-top: 1rem;
 border: none;
 width: 100%;
 height: .0625rem;
`