import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const Logo = styled.img.attrs({
  src: logo,
})`
  display: inline-block;
  margin-top: 36px;
  margin-left: 45px;
  margin-bottom:128px;
`;

function Header() {
  return <Logo />;
}

export default Header;
