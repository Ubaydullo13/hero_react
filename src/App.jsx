import Container from './components/Container/Container'
import styled from 'styled-components'
import hero from './assets/images/hero_img.png'



const AppWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right top;
`

function App() {

  return (
     <AppWrapper>
      <Container />
    </AppWrapper>
   
  )
}

export default App
