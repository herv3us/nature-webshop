import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background-color: #00000073;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 15;
`;

export const PopupWindow = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background-color: #eee;
  border-radius: 4px;
  padding: 2.5rem;
  border: 1px solid #353535a4;
  overflow: hidden;
  display: flex;
  box-shadow: 0px 0.25rem 0.8rem rgba(0, 0, 0, 0.7);
`;

export const Image = styled.img`
  height: 500px;
  max-width: 340px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  background-color: #fff;
  margin-left: 1rem;
  border: 3px;
  color: #353535;

  h1 {
    text-align: center;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: -1.3rem;
  right: -1.3rem;
  font-weight: bold;
  color: #c04e4e;
  border: none;
  background-color: #ddd;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  text-align: center;

  &:hover {
    color: #eee;
    background-color: #c04e4e;
  }
`;
