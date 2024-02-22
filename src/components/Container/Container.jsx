import styled from "styled-components"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"

const Contain = styled.div`
    max-width:1200px;
    margin:0 auto;
`

function Container() {
  return (
    <>
     <Contain>
      <Header />
      <Hero />
    </Contain>
    </>
   
  )
}

export default Container