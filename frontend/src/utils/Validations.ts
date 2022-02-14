export const isValidProductName = (
  productName: string
): [boolean, string, string] => {
  if (productName.length === 0) {
    return [false, '🛑', 'Du måste fylla i ett produktnamn'];
  } else if (productName.length <= 3) {
    return [false, '🛑', 'Produktnamnet måste ha minst 4 tecken'];
  } else {
    return [true, '💚', ''];
  }
};

export const isValidDescription = (
  description: string
): [boolean, string, string] => {
  if (description.length === 0) {
    return [false, '🛑', 'Fyll i en produktbeskrivning'];
  } else if (description.length <= 19) {
    return [false, '🛑', 'Beskrivningen måste vara på minst 20 tecken'];
  } else {
    return [true, '💚', ''];
  }
};

export const isValidImage = (imgUrl: string): [boolean, string, string] => {
  const img = imgUrl.toLocaleLowerCase();
  if (img.length === 0) {
    return [false, '🛑', 'Fyll i länk till produktbild'];
  } else if (
    img.endsWith('.jpg') ||
    img.endsWith('.png') ||
    img.startsWith('https://images.unsplash') ||
    img.startsWith('http://images.unsplash')
  ) {
    return [true, '💚', ''];
  } else {
    return [false, '🛑', 'Välj en godkänd bildlänk från t.ex unsplash'];
  }
};

export const isValidPrice = (price: string): [boolean, string, string] => {
  if (price.length === 0) {
    return [false, '🛑', 'Fyll i pris för produkten'];
  } else if (+price < 99) {
    return [false, '🛑', 'För lågt pris, sätt pris över 98kr'];
  } else {
    return [true, '💚', ''];
  }
};

export const isValidStock = (stock: string): [boolean, string, string] => {
    if(stock.length === 0) {
        return [false, '🛑', 'Fyll i antal i lager för produkten']
    } else if (+stock === 0) {
        return [false, '🛑', 'För lågt antal. Det måste finnas minst 1 i lager']
    } else {
        return [true, '💚', '']
    }
}
