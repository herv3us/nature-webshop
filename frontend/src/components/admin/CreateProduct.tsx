import styled from 'styled-components';

function CreateProduct() {
  return (
    <Form>
      <h2>Skapa ny produkt</h2>
      <Content>
        <InputWrapper>
          <label>Produktnamn</label>
          <input type="text" placeholder="Produktnamn" />
        </InputWrapper>
        <InputWrapper>
          <label>Beskrivning</label>
          <textarea placeholder="Beskrivning av produkten"></textarea>
        </InputWrapper>
        <InputWrapper>
          <label>Produktbild</label>
          <input type="text" placeholder="URL till produktbild" />
        </InputWrapper>
        <InputWrapper>
          <label>Pris</label>
          <input type="number" placeholder="Pris" />
        </InputWrapper>
        <InputWrapper>
          <label>I lager</label>
          <input type="number" placeholder="Antal i lager" />
        </InputWrapper>
        <InputWrapper>
          <label>Kategori</label>
          <select>
            <option value="jacket">Jacka</option>
            <option value="backpack">Ryggsäck</option>
            <option value="shoes">Skor</option>
          </select>
        </InputWrapper>
      </Content>
      <Button type="submit">Skapa produkt</Button>
    </Form>
  );
}

export default CreateProduct;

const Form = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.4rem;
  color: #353535;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

const Content = styled.div`
  background-color: #eee;
  border-radius: 0.3rem;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  input,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    resize: none;
    border-radius: 0.3rem;
    outline: none;
    border: none;
    padding: 0.3rem;

    &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #476647e4;
  border: 1px solid #476647e4;
  border-radius: 3px;
  color: #eee;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.2rem 0.9rem;
  text-transform: uppercase;
  transition: ease all 0.3s;

  &:hover {
    background-color: #5d915de3;
    border: 1px solid #5d8b5de3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    transform: scale(0.99);
  }
`;
