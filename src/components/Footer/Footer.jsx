import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg"

const Start = styled.div`
    background-color:#F23F87 ;
    width: 50%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 247px;
`

const Text = styled.p`
     color:#fff;
     font-size: 18px;
     font-weight: 500;
`

function Footer() {
  return (
  <Start>
    <Text>Start Shopping</Text>
    <img src={arrow} alt="arrow" />
  </Start>
  )
}

export default Footer