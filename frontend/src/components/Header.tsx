import styled from 'styled-components';
import { Video } from './../styling/Video.styled';
import { Flex } from './../styling/Flex.styled';

function Header() {
  return (
    <div>
      <StyledDiv>
        <StyledHeadings>
          <h1>Welcome to Nature ⛺</h1>
          <h3>Your adventure starts here.</h3>
        </StyledHeadings>

        <Video>
          <video autoPlay loop role="video">
            <source src="/images/adventure.mp4" />
            Your browser does not support the video tag.
          </video>
        </Video>
      </StyledDiv>
    </div>
  );
}

export default Header;

const StyledDiv = styled(Flex)`
  height: 95vh;
`;

const StyledHeadings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2.5rem;
  color: #eee;
  background-color: #eeeeee44;
  padding: 2rem 4rem;
  border-radius: 3px;
  margin-top: -17rem;

  @media (max-width: 1150px) {
    font-size: 1.7rem;
  }

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`;
