import styled from "styled-components";

const Title = styled.h1`
  font-size: 90px;
  color: #242635;
  line-height: 135px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #242635;
  line-height: 33px;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Text = styled.p`
    font-size: 20px;
    line-height: 30px;
    color: #242635;
    width:410px;
    opacity: 0.6;
`

function Hero() {
  return (
    <>
      <Title>Collection</Title>
      <Subtitle>Create your own style</Subtitle>
      <Text>
      A style for every story, get the latest style here at an inexpensive price.
      </Text>
    </>
  );
}

export default Hero;
