import styled from "styled-components";

export const External = styled.div`
 height: 3rem;
 margin-top: 3rem;
`
export const HeaderStyle = styled.header`
 width: 90%;
 margin: 0 auto;
 margin-top: 2rem;
 display: flex;
 /* justify-content: center; */
 
 display: flex;
 align-items: center;
 /* justify-content: space-around; */


 .nav-list ul {
  transition: 0.5s all;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0; 
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: #08BA92;
  align-items: center;
  padding-top: 20vh;
  box-shadow: -1px 10px 50px -9px rgba(0,0,0,0.32);
  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    margin: 10px;
    font-size: 1.5rem;
    a {
      justify-content: center;
      font-weight: 600;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #fff;
        transition: 5ms all;
      }
    }
  }
}

.menu_icon {
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  color: #fff;
  position: fixed;
  right: 1.25rem;
  z-index: 50;
  padding: .1rem;
}

.nav-link {
  color: #fff;
  font-weight: 600;
  font-family: 'Kalam', cursive;
  text-align: center;
  font-size: 1.25rem;
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
 border: none;
 position: fixed;
 width: 100%;
 height: .0625rem;
`