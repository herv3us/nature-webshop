import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../../services/localStorageService';
import { getProductById, updateProduct } from '../../services/productService';
import {
  Form,
  Content,
  IconWrapper,
  InputWrapper,
  Button,
} from '../../styling/CreateProduct.styled';
import {
  isValidProductName,
  isValidDescription,
  isValidImage,
  isValidPrice,
  isValidStock,
  isValidCategory,
} from '../../utils/Validations';
import styled from 'styled-components';
import DeleteProduct from './DeleteProduct';

function EditProduct() {
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  const getThisProduct = async () => {
    const res = await getProductById(id as string);

    if (res.success) {
      setTitle(res.product.title);
      setCategory(res.product.category);
      setDescription(res.product.description);
      setImg(res.product.imgUrl);
      setPrice(res.product.price);
      setStock(res.product.stock);
    }
  };

  useEffect(() => {
    getThisProduct();
  }, []);

  const [title, setTitle] = useState('');
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [titleMessage, setTitleMessage] = useState('');
  const [titleIcon, setTitleIcon] = useState('');
  const [, setTitleIsVisited] = useState(false);

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
  const [, setDescriptionIsVisited] = useState(false);

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
  const [, setImgIsVisited] = useState(false);

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
  const [, setPriceIsVisited] = useState(false);

  const onBlurPriceHandler = () => {
    const [isValid, icon, message] = isValidPrice(price);
    setPriceIsVisited(true);
    setPriceIsValid(isValid);
    setPriceMessage(message);
    setPriceIcon(icon);
  };

  const [stock, setStock] = useState('');
  const [stockIsValid, setStockIsValid] = useState(false);
  const [stockMessage, setStockMessage] = useState('');
  const [stockIcon, setStockIcon] = useState('');
  const [, setStockIsVisited] = useState(false);

  const onBlurStockHandler = () => {
    const [isValid, icon, message] = isValidStock(stock);
    setStockIsVisited(true);
    setStockIsValid(isValid);
    setStockIcon(icon);
    setStockMessage(message);
  };

  const [category, setCategory] = useState('choose');
  const [categoryIsValid, setCategoryIsValid] = useState(false);
  const [categoryMessage, setCategoryMessage] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('');
  const [, setCategoryIsVisited] = useState(false);

  const onBlurCategoryHandler = () => {
    const [isValid, icon, message] = isValidCategory(category);
    setCategoryIsVisited(true);
    setCategoryIsValid(isValid);
    setCategoryIcon(icon);
    setCategoryMessage(message);
  };

  const formIsValid =
    titleIsValid &&
    descriptionIsValid &&
    imgIsValid &&
    priceIsValid &&
    stockIsValid &&
    categoryIsValid;

  const navigate = useNavigate();

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const token = getTokenFromLocalStorage();
    const admin = getUserFromLocalStorage();

    if (!token && admin?.role !== 'admin') {
      navigate('/');
    }

    const productObj = {
      title,
      category,
      description,
      imgUrl: img,
      price: Number(price),
      stock: Number(stock),
    };

    const updatedProduct = await updateProduct(
      productObj,
      id as string,
      token as string
    );

    if (updatedProduct.success === true) {
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  if (!success) {
    return (
      <Wrapper>
        <Form onSubmit={onSubmitHandler}>
          <DeleteProduct id={id as string} />
          <h2>Uppdatera Produkt</h2>
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
              <label>Kategori</label>
              <IconWrapper>
                <span>{categoryIcon}</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  onBlur={onBlurCategoryHandler}
                >
                  <option value="choose">Välj kategori</option>
                  <option value="jacket">Jacka</option>
                  <option value="backpack">Ryggsäck</option>
                  <option value="shoes">Skor</option>
                </select>
              </IconWrapper>
              <small>{categoryMessage}</small>
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
          </Content>
          <Button type="submit" disabled={!formIsValid}>
            uppdatera
          </Button>
        </Form>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>Produkten är uppdaterad. Du skickas nu till startsidan.</Wrapper>
    );
  }
}

export default EditProduct;

const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  position: relative;
`;
