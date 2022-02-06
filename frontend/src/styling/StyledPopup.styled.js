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
  width: 55%;
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
  border-radius: 3px;

  h1 {
    text-align: center;
    margin-top: 2rem;
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
    cursor: pointer;
  }
`;

export const StyledContent = styled.div`
  padding: 1.5rem 2.4rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  height: 100%;

  span {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.1rem 1rem 0.1rem 0.1rem;
    border-radius: 2px;
  }
`;

export const StockWarning = styled.p`
  color: #c04e4e;
  margin: 2rem 0 0;
`;
