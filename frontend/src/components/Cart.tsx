import React from 'react';
import styled from 'styled-components';

function Cart() {
  return (
    <Wrapper>
      <Content>
        <h1>Din Varukorg</h1>
        <div>
          <h3>title</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          officia.
        </div>
        <div>
          <h3>ny titel</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </Content>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  color: #353535;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 3rem auto; */
  max-width: 550px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
`;
