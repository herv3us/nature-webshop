import styled from 'styled-components';
import { Video } from './../styling/Video.styled';
import { Flex } from './../styling/Flex.styled';

function Header() {
  return (
    <StyledDiv>
      <h1>Welcome to Nature 🐳</h1>
      <h3>Your adventure starts here</h3>

      <Video>
        <video autoPlay loop role="video">
          <source src="/images/adventure.mp4" />
          Your browser does not support the video tag.
        </video>
      </Video>
    </StyledDiv>
  );
}

export default Header;

const StyledDiv = styled(Flex)`
  width: 80%;
  margin: 0 auto;
`;
