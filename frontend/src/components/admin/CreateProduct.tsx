import { useState } from 'react';
import styled from 'styled-components';
import {
  isValidProductName,
  isValidDescription,
  isValidImage,
  isValidPrice,
  isValidStock,
} from '../../utils/Validations';

function CreateProduct() {
  const [title, setTitle] = useState('');
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [titleMessage, setTitleMessage] = useState('');
  const [titleIcon, setTitleIcon] = useState('');
  const [titileIsVisited, setTitleIsVisited] = useState(false);

  const onBlurTitleHandler = () => {
    const [isValid, icon, message] = isValidProductName(title);
    setTitleIsVisited(true);
    setTitleIsValid(isValid);
    setTitleIcon(icon);
    setTitleMessage(message);
  };

  const [description, setDescription] = useState('');
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [descriptionMessage, setDescriptionMessage] = useState('');
  const [descriptionIcon, setDescriptionIcon] = useState('');
  const [descriptionIsVisited, setDescriptionIsVisited] = useState(false);

  const onBlurDescriptionHandler = () => {
    const [isValid, icon, message] = isValidDescription(description);
    setDescriptionIsVisited(true);
    setDescriptionIsValid(isValid);
    setDescriptionIcon(icon);
    setDescriptionMessage(message);
  };

  const [img, setImg] = useState('');
  const [imgIsValid, setImgIsValid] = useState(false);
  const [imgMessage, setImgMessage] = useState('');
  const [imgIcon, setImgIcon] = useState('');
  const [imgIsVisited, setImgIsVisited] = useState(false);

  const onBlurImgHandler = () => {
    const [isValid, icon, message] = isValidImage(img);
    setImgIsVisited(true);
    setImgIsValid(isValid);
    setImgMessage(message);
    setImgIcon(icon);
  };

  const [price, setPrice] = useState('');
  const [priceIsValid, setPriceIsValid] = useState(false);
  const [priceMessage, setPriceMessage] = useState('');
  const [priceIcon, setPriceIcon] = useState('');
  const [priceIsVisited, setPriceIsVisited] = useState(false);

  const onBlurPriceHandler = () => {
    const [isValid, icon, message] = isValidPrice(price);
    setPriceIsVisited(true);
    setPriceIsValid(isValid);
    setPriceMessage(message);
    setPriceIcon(icon);
  };

  const [stock, setStock] = useState('');
  const [stockisValid, setStockIsValid] = useState(false);
  const [stockMessage, setStockMessage] = useState('');
  const [stockIcon, setStockIcon] = useState('');
  const [stockIsVisited, setStockIsVisited] = useState(false);

  const onBlurStockHandler = () => {
    const [isValid, icon, message] = isValidStock(stock);
    setStockIsVisited(true);
    setStockIsValid(isValid);
    setStockIcon(icon);
    setStockMessage(message);
  };

  return (
    <Form>
      <h2>Skapa ny produkt</h2>
      <Content>
        <InputWrapper>
          <label>Produktnamn</label>
          <IconWrapper>
            <span>{titleIcon}</span>
            <input
              type="text"
              placeholder="Produktnamn"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={onBlurTitleHandler}
            />
          </IconWrapper>
          <small>{titleMessage}</small>
        </InputWrapper>
        <InputWrapper>
          <label>Beskrivning</label>
          <IconWrapper>
            <span>{descriptionIcon}</span>
            <textarea
              placeholder="Beskrivning av produkten"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={onBlurDescriptionHandler}
            ></textarea>
          </IconWrapper>
          <small>{descriptionMessage}</small>
        </InputWrapper>
        <InputWrapper>
          <label>Produktbild</label>
          <IconWrapper>
            <span>{imgIcon}</span>
            <input
              type="text"
              placeholder="URL till produktbild"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              onBlur={onBlurImgHandler}
            />
          </IconWrapper>
          <small>{imgMessage}</small>
        </InputWrapper>
        <InputWrapper>
          <label>Pris</label>
          <IconWrapper>
            <span>{priceIcon}</span>
            <input
              type="number"
              placeholder="Pris"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onBlur={onBlurPriceHandler}
            />
          </IconWrapper>
          <small>{priceMessage}</small>
        </InputWrapper>
        <InputWrapper>
          <label>I lager</label>
          <IconWrapper>
            <span>{stockIcon}</span>
            <input
              type="number"
              placeholder="Antal i lager"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              onBlur={onBlurStockHandler}
            />
          </IconWrapper>
          <small>{stockMessage}</small>
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
  color: #353535;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 1rem 4rem;
  width: 500px;
  position: relative;

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

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }

  input,
  textarea {
    margin-right: 15px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  .valid {
    border: #eee solid 1px;
  }

  .invalid {
    border: red solid 1px;
  }

  .error {
    color: red;
  }

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
  color: #eee;
  background-color: #476647e4;
  border: 1px solid #476647e4;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.2rem 0.9rem;
  width: fit-content;
  text-transform: uppercase;
  transition: ease all 0.3s;
  position: absolute;
  right: 17px;

  &:hover {
    background-color: #5d915de3;
    border: 1px solid #5d8b5de3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    transform: scale(0.99);
  }
`;
