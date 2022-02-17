import styled from 'styled-components';
import { Video } from './../styling/Video.styled';
import { Flex } from './../styling/Flex.styled';

interface Props {
  src: string;
  title: string;
  subtitle: string;
}

function Header(props: Props) {
  const { src, title, subtitle } = props;

  return (
    <div>
      <StyledDiv>
        <StyledHeadings>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </StyledHeadings>

        <Video>
          <video autoPlay loop role="video">
            <source src={src} />
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
  text-shadow: 0 0 3px rgba(118, 119, 118, 0.3);
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
