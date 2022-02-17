import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import logo from '../img/nature.png';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <Logo src={logo} alt="logo" />
      <p>&copy; Sofia Hervéus 2022</p>
      <Icons>
        <a href="https://github.com/herv3us" title="GitHub">
          <GoMarkGithub size={25} />
        </a>
        <a href="https://linkedin.com/in/sofiaherveus" title="LinkedIn">
          <AiFillLinkedin size={28} />
        </a>
      </Icons>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: #eee;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  color: #476647;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.05rem;
  padding: 0.5rem 1rem 0.5rem 1.8rem;
  z-index: 10;
  height: 60px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #476647f4;
    padding: 0 1rem;
    transition: all 0.3s;

    &:hover {
      color: #4f724f;
      transform: scale(1.05) rotate(3deg);
    }

    &:visited {
      color: #476647f4;
    }
  }
`;

const Logo = styled.img`
  width: 80px;
`;
