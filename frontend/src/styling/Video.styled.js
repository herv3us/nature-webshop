import styled from 'styled-components';

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.65;
  overflow: hidden;

  video {
    height: 95%;
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
`;
